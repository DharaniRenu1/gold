import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit {
 public fruit_list=[
   {"id":1,"name": "apple" },
   {"id":2,"name": "Orange" },
   {"id":3,"name": "Grapes" }
 ];
  constructor(public rou:Router) { }

  ngOnInit() {
  }
  onselect(fl)
  {
    this.rou.navigate(['/fList',fl.id]);
  }
}
