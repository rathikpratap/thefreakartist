import { Component } from '@angular/core';
import { CustomerReviewService } from '../services/customer-review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  userReview : any={};
  
  constructor (private customerReview : CustomerReviewService) {
    this.customerReview.users().subscribe((data)=>{
      this.userReview = data;
      
    });
  }
  getFormData (data: any) {
    this.customerReview.saveReview(data).subscribe((result)=> {
      console.log(result);
      
    })
  }
  reviewAlert(){
    alert("Thanks for your Respose. 😁");
    location.reload();
  }
  
}
