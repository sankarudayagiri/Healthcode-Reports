import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) {

   }

   getData(){
     return this.http.get("https://jsonplaceholder.typicode.com/posts");
   }

  //  sendReport(){
  //    return this.http.post("https://jsonplaceholder.typicode.com/posts")
  //  }

}
