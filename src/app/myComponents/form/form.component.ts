import { Component, OnInit } from '@angular/core';
import { AnsuploadService } from 'src/app/Services/ansupload.service';
import { FacopService } from 'src/app/Services/facop.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  q1:any;
  q2:any;
  q3:any;
  q4:any;
  q5:any;
  set!:any;
  constructor(private service:AnsuploadService,private service1:FacopService) { 
    this.service1.getset().subscribe((value:any)=>{
      this.set = value;
    });
  }

  ngOnInit(): void {
  }

  submit() : void{
    this.service.addanswer(this.q1,this.q2,this.q3,this.q4,this.q5)
  }

}
