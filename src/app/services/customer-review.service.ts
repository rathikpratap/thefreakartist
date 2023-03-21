import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerReviewService {
  url = "http://localhost:3000/reviews";
  constructor(private http: HttpClient) { }
  users(){
    return this.http.get(this.url);
  }
  saveReview(data: any) {
    return this.http.post(this.url, data)
  }
}
