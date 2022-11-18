import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-stu',
  templateUrl: './login-stu.component.html',
  styleUrls: ['./login-stu.component.css']
})
export class LoginStuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  clicker():void{
    this.router.navigate(['exam']);
  }

}
