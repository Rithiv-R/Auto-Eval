import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FlaskConnectService } from 'src/app/Services/flask-connect.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  questions = ['1','2','3','4','5']
  number = '1';
  @Input() list:any;
  @Input() set:any;
  ques = 'que1';
  ans = 'q1';
  key = 'key1';
  marks1 = false;
  npresent = false;
  marks:any;
  constructor(private api:FlaskConnectService) { }

  ngOnInit(): void {
  }

  changer(index:any):void{
    this.number = index; 
    this.ques = 'que'+index;
    this.ans = 'q'+index;
    this.key = 'key1'+index;
    this.marks1 = false;
    this.marks = null;
    this.npresent = false;
  }

  getmarks()
  {
    this.marks1 = false;
    this.marks = null;
    this.npresent = true;
    this.api.getMarks(this.list[this.ans],this.set[this.key]).subscribe((data:any)=>{
      this.marks = data['marks'];
      console.log(data['summary']);
      this.marks1 = true;
      this.npresent = false;
    })
  }

}
