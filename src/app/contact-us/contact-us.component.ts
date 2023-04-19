import { Component } from '@angular/core';
import {ContactusReviewService} from '../services/contactus-review.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactReview: any={};

  constructor(private contactusReview : ContactusReviewService) {
    this.contactusReview.contactUsers().subscribe((data)=>{
      this.contactReview = data;
      
    });
  }
  getContactData (data: any) {
    this.contactusReview.saveContactus(data).subscribe((result)=> {
      console.log(result);
      
    })
  }
  contactAlert(){
    alert("Thanks for your Response. 😁");
    location.reload();
  }

}
