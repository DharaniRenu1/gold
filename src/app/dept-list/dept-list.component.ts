import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.scss']
})
export class DeptListComponent implements OnInit {
  public dept_Id;
public dep_list=[
  {"id":1,"book":"angular"},
  {"id":2,"book":"node"},
  {"id":3,"book":"js"}
];
  constructor(public router:Router,public arout:ActivatedRoute) { }

  ngOnInit() {
    this.arout.paramMap.subscribe((params : ParamMap)=>{
      this.dept_Id=parseInt(params.get('id'));
    });
  }
  onSelect(dept)
  {

        this.router.navigate(['/dept',dept.id]);
       
  } 
  isselect(dept)
  {
    return dept.id=== this.dep_list;
  }
}
