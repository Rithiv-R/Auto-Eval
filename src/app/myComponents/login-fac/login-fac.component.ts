import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-fac',
  templateUrl: './login-fac.component.html',
  styleUrls: ['./login-fac.component.css']
})
export class LoginFacComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  clicker():void{
    this.router.navigate(['marks']);
  }

}
