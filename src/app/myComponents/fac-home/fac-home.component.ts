import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fac-home',
  templateUrl: './fac-home.component.html',
  styleUrls: ['./fac-home.component.css']
})
export class FacHomeComponent implements OnInit {

  tick=false;
  @Input() list:any;
  constructor() { }

  ngOnInit(): void {
  }

  ontick()
  {
    this.tick = true;
  }

}
