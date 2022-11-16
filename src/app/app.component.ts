import { Component } from '@angular/core';
import {FlaskConnectService} from './Services/flask-connect.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autoeval';
  fetcheddata!: any;
  npresent = false;
  
  constructor(private api:FlaskConnectService) {}

  ngOnInit()
  {
    this.api.getMarks().subscribe((data)=>{
      this.npresent = true;
      this.fetcheddata = data;
    })
  }

}
