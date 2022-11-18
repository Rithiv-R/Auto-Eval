import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlaskConnectService {

  constructor (private http:HttpClient) {}

  getMarks(answer:any,key:any){
    var obj = this.http.get("http://127.0.0.1:5000/service?answer="+answer+"&key="+key); 
    return obj;
    }

}
