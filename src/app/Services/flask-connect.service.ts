import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlaskConnectService {

  constructor (private http:HttpClient) {}

  getMarks(){
    var obj = this.http.get("http://127.0.0.1:5000/service?answer=Photosynthesis is a process using which plants make there own food.It converts water and air into glucose and carbohydrates in the presence of sunlight. Thus it occurs only during day. This is possible due to the Chlorophyll present in the leaves capturing the solar energy. The water and air are absorbed from roots and leaves respectively from the environment nearby. The final end product is finally stored in the plant's cell or been used as food some other way.&key=Photosynthesis is the process in which solar energy is trapped by chlorophyll to convert the carbon dioxide and water to produce food in the form of glucose.It is produced in the plants where chlorophyll is present inside the chloroplast as trapping the solar energy initiates the process.The water comes from the root while the carbon dioxide enters through the stomata.The end product is carbohydrate which is either used as food or stored in the cells"); 
    return obj;
    }

}
