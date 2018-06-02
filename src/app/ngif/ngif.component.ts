import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {
 public display=false;
 public colors=["red","blue","green"];
 public show:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
