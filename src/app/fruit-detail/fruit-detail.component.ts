import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fruit-detail', 
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {
 public F_id;
  constructor(public ar:ActivatedRoute) { }

  ngOnInit() {
   let id =parseInt(this.ar.snapshot.paramMap.get('id'));
  this.F_id=id;
  }

}
