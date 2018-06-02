import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
declare let window: any;
import {ContractService} from "../contract.service";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public model:{};
  angForm: FormGroup;
  public bankname:string;
  public loan:number;
  public fixed:number;
  public account: any;
  public balance:number;
  public  _web3: any;
  public id1:any
  public id2:any;
  constructor(private cs: ContractService,private route:Router,public fb:FormBuilder) {
    this.createForm();
    this.account=this.cs.getAccount();
    if( typeof window.web3 != 'undefined')
    {
      this._web3=new Web3(window.web3.currentProvider);
    }
   }
  submit()
  {
    this.cs.register(this.bankname,this.loan,this.fixed);
  }
  createForm()
  {
    this.angForm = this.fb.group({
      bankname: ['', Validators.required ],
      loan: ['', Validators.required ],
      fixed: ['', Validators.required ],
    });
  }
  ngOnInit() {
  
}

}
