import { Component, OnInit } from '@angular/core';
import { FacopService } from 'src/app/Services/facop.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  studentlist:any = [];
  set:any;
  onselected=false;
  item:any;
  facitem = {'regno':'20CWS','name':'IVRITH'};
  constructor(private service:FacopService, private router: Router) { }
  

  ngOnInit(): void {
    this.service.getset().subscribe((value:any)=>{
      this.set = value;
    });
    this.service.getlist().subscribe((val:any)=>{
      val.forEach((element:any) => {
        this.studentlist.push({
          'name':element['name'],
          'regno':element['regno'],
          'q1':element['q1'],
          'q2':element['q2'],
          'q3':element['q3'],
          'q4':element['q4'],
          'q5':element['q5'],
        })
      });
    })
  }

  changestate(list:any)
  {
      this.onselected = true;
      this.item = list 
  }

  onsignout()
  {
      this.router.navigate(['']);
  }


}
