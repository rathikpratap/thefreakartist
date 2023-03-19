import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  sketchCount:number = 0;
  orderCount: number = 0;
  customerCount:number = 0;


  countStop:any = setInterval(()=>{
    this.sketchCount++;

    if(this.sketchCount == 50){
      clearInterval(this.countStop);
    }
  },120)

  orderStop:any = setInterval(()=>{
    this.orderCount++;

    if(this.orderCount == 30){
      clearInterval(this.orderStop);
    }
  },200)

  customerStop:any = setInterval(()=>{
    this.customerCount++;

    if(this.customerCount == 30){
      clearInterval(this.customerStop);
    }
  },200)
}
