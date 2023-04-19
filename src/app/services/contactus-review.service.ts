import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusReviewService {
  contactusUrl=  "http://localhost:3000/contactUs";

  constructor(private http: HttpClient) { }
  contactUsers(){
    return this.http.get(this.contactusUrl);
  }
  saveContactus(data: any) {
    return this.http.post(this.contactusUrl, data)
  }
}
