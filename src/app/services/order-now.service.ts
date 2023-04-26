import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderNowService {
  orderUrl=  "http://localhost:3000/Order";

  constructor(private http: HttpClient) { }

  orderUsers(){
    return this.http.get(this.orderUrl);
  }
  saveOrder(data: any) {
    return this.http.post(this.orderUrl, data)
  }

  

}
