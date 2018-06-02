import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-dept-detail',

  templateUrl: './dept-detail.component.html',
  styleUrls: ['./dept-detail.component.scss']
})
export class DeptDetailComponent implements OnInit {

  constructor(public route:ActivatedRoute,public router:Router) { }
public dept_Id;

  ngOnInit() {
    // let id= parseInt(this.route.snapshot.paramMap.get('id'));
    // this.dept_Id=id; 
    this.route.paramMap.subscribe((params : ParamMap)=>{
      this.dept_Id=parseInt(params.get('id'));
    });
  }
  goPrevious()
  {
   let pre=this.dept_Id-1;
   this.router.navigate(['/dept',pre]);
  }
  goNext()
  {
 
    let next=this.dept_Id+1;
    this.router.navigate(['/dept',next]);
  }
  goDept()
  {
    let select=this.dept_Id? this.dept_Id :null;
    this.router.navigate(['/dept',{id:select}]);
  }
}
