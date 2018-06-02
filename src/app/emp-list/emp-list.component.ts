import { Component, OnInit } from '@angular/core';
import { HeadService } from '../head.service';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  public emp=[];
  public errorMsg;
  constructor(public h:HeadService) { 
   this.h.getEmp()
   .subscribe(data => this.emp =data,
     error => this.errorMsg =error);
  }

  ngOnInit() {
  }

}
