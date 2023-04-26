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