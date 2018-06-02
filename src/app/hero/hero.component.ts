import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';
import{ Hero } from '../shared/hero';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
public heroes=[];
public errmsg;
selectedHero:Hero;
color:string;
public greeting="";
public succ="text-success";
public a="te";
public hasError=true;
public status = true;
public highlightcolor="pink";
public style={
  "fontSize":"50px",
  "color":"red"

}
public message={
  "text-success":!this.hasError,
  "te":!this.status
}
  constructor(public heroe:ServicesService) { 
  }
  ngOnInit() 
  {
    this.heroe.getHeroes()
    .subscribe(data=>this.heroes=data,
    error => this.errmsg=error);
   
  }
  Onclick(){
   console.log("Good");
 }
 Click(event)
 {
  console.log(event);
   this.greeting="Greeting";
 }
 Onselect(hero :Hero) 

  {
  this.selectedHero= hero;
  console.log("Selected"+hero);
  }
}
