import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';
import{ Hero } from '../shared/hero';
import { HeadService } from '../head.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  public employee = [];
  constructor(public ss:ServicesService) 
{
   }

   ngOnInit() 
   {
       
   }
}
