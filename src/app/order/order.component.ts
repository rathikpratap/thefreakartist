import { Component } from '@angular/core';
import { OrderNowService } from '../services/order-now.service';
import { Observable, Subscriber, observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  Order: any={};
  myImage!: Observable<any>;
  base64code!: any;
  option = "choose";
  bodyOption="choose";
  faces : string = '';
  bodyType: string  = '';
  totalAmt : string = '';


  totalAmount() {
    this.faces = (<HTMLInputElement>document.getElementById("faceId")).value;
    this.bodyType = (<HTMLInputElement>document.getElementById("bodyId")).value;
    if(this.faces=='1' && this.bodyType=='1') {
      this.totalAmt = '799';
    } else if(this.faces=='1' && this.bodyType=='2') {
      this.totalAmt = '1199';
    } else if(this.faces=='2' && this.bodyType=='1') {
      this.totalAmt = '999';
    }
    else if(this.faces=='2' && this.bodyType=='2') {
      this.totalAmt = '1599';
    } else {
      this.totalAmt = "Please select faces And bodyType!!!";
    }
    console.log(this.faces);
  }

  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file : File = (target.files as FileList)[0];
    console.log(file);

    this.convertToBase64(file)
  }

  convertToBase64(file:File) {
    const observable = new Observable ((Subscriber: Subscriber<any>)=> { this.readFile(file,Subscriber)})

    observable.subscribe((d)=>{
      console.log(d);
      this.myImage = d
      this.base64code = d
    })
  }

  baseObject = {
    imgData : this.base64code
  };

  baseString = JSON.stringify(this.baseObject);

  readFile (file:File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file)

    filereader.onload = () => {
      subscriber.next(filereader.result);

      subscriber.complete()
    }
    filereader.onerror = ()=>{
      subscriber.error()
      subscriber.complete()
    }
  }
  

  constructor(private order : OrderNowService) {
    this.order.orderUsers().subscribe((data)=>{
      this.Order = data;
      
    });
  }

  

  getOrderdata (data: any) {
    this.order.saveOrder(data).subscribe((result)=> {
      console.log(result);
      
    })
  }
  orderAlert(){

    alert("Thanks for your Response. 😁");
    location.reload();
  }
}