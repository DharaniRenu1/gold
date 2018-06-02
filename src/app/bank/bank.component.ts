import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
declare let window: any;
import {ContractService} from "../contract.service";

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  public deposit:number;
  angform:FormGroup;
  public model:{};
  public withdraw:number;
  public account: any;
  public balance:number;
  public  _web3: any;
  public id1:any
  public id2:any;
  constructor(private cs: ContractService,private route:Router,public ff:FormBuilder) {
    this.createform();
    this.account=this.cs.getAccount();
    if( typeof window.web3 != 'undefined')
    {
      this._web3=new Web3(window.web3.currentProvider);
    }
   }
   createform()
   {
     this.angform=this.ff.group({
       deposit:['',Validators.required]
     });
   }
   submit()
   {
   
   
     this.cs.deposit(this.deposit);
    
   }
   withd()
   {
     this.cs.withdraw(this.withdraw);
   }
  ngOnInit() {
  }

}
