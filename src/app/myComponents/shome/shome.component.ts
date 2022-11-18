import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class ShomeComponent implements OnInit {
  tick=false;
  list ={'name':'RITHIV.R','regno':'19MIC0113'}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ontick()
  {
    this.tick = true;
  }

  onsignout()
  {
      this.router.navigate(['']);
  }

}
