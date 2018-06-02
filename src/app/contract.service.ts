import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import { promise } from 'protractor';
import { reject } from 'q';
import { Z_SYNC_FLUSH } from 'zlib';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
import { resolve } from 'path';
declare let require:any;
declare let window:any;
let tokenAbi = require('./contract.json');
@Injectable()
export class ContractService {
public _account:string=null;
public _web3:any;
private _tokenContract: any;
private _tokenContractAddress:string="0xe6c00e8f237de23432d914b6b6e1193f3eff8974";

constructor(private router:Router) { 
  if (typeof window.web3 !== 'undefined') {
  
    this._web3 = new Web3(window.web3.currentProvider);
  } 
  else 
  {
    console.warn("Please use a dapp browser like mist or MetaMask plugin for chrome");
  }
  this._web3.version.getNetwork((err,netId)=>
    {
      switch(netId)
      {
        case "1":
          console.log('This is mainnet');
          break;
        case "2":
          console.log('This is deprecated Morden test network');
          break;
        case "3":
          console.log('This is ropsten test network');
          break;
        case "4":
          console.log('This is the Rinkeby test network');
        case "42":
          console.log('This is the kovan test network');
          break;
        default:
          console.log('This is an unknown network.');
      }	
    });
  this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
}
  public async getAccount():Promise<string>
  {
    if(this._account==null)
    {
      this._account= await new Promise((resolve,reject)=>{
          this._web3.eth.getAccounts((err,accs)=>
        {
          if(err!=null)
          {
            alert("There was an error in fetching your accounting");
            return;
          }
          if(accs.length===0)
          {
            alert("could\'t find");
            return;
          }
          resolve(accs[0]);
        })    
      })as string;
    }
    return Promise.resolve(this._account)
  }
public async basicfunction() : Promise<string>
{
  let meta = this;
  let account= await meta.getAccount();
  var accountInterval=setInterval(function(){
   meta._web3.eth.getAccount(function(err,res)
  {
    if(res[0]!== meta._account)
    {
      window.location.reload();
    }
  })

  },100);
  return Promise.resolve(this._account);
}
public async getUserBalance():Promise<number>
{
  let account = await this.getAccount();
  return new Promise((resolve,reject)=>
{
let _web3=this._web3;
this._web3.eth.getBalance(account,function(err,result)
  {
    if(err != null) {
      reject(err);
    }

    resolve(_web3.fromWei(result));               
  });
})as Promise<number>;
}
public async register(a,b,c):Promise<number>
{
let account= await this.getAccount();
return new Promise((resolve,reject)=>
{
let _web3=this._web3;
b*=100;
c*=100;
this._tokenContract.register(_web3.fromAscii(a),b,c,{from:account,gas:600000},function(err,res){
  if(err!=null)
  {
    reject(err);
  }
  resolve(res);
})
})as Promise<number>;
}
public async deposit(a):Promise<number>
{

  let account=await this.getAccount();

  return new Promise((resolve,reject)=>
{
  alert("")
  let _web3 = this._web3;

  this._tokenContract.deposit(account,{from:account,value:this._web3.toWei(a,"ether"),gas: 600000},function (err, result) {
     

if(err!=null)
{
  reject(err);
}
resolve(_web3.fromWei(result));
});
})as Promise<number>;
}
public async withdraw(a):Promise<number>
{
  let account= await this.getAccount();
  return new Promise((resolve,reject)=>
{
let _web3=this._web3;
this._tokenContract.withdraw(this._web3.toWei(a,"ether"),{from:account,gas:600000},function(err, res)
{
resolve(_web3.fromWei(res));
});
})as Promise<number>;
}

public async isregister():Promise<boolean>
{
  let meta=this;
    let account:string =''; 
    await this.getAccount().then(address => account = address);
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.bank(account,function (err, result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          result[2];
 
        }
        resolve(result[2]);
        
      });
    }) as Promise<boolean>;
    
}
public async hash(a): Promise<string>
   {
     let meta = this;
     return new Promise((resolve, reject) => {
   
       var accountInterval = setInterval(function()
       {
         meta._web3.eth.getTransactionReceipt(a,function(err,result){
           if(err != null) {
           reject(err);
           }
   
           if(result !== null)
           {
             clearInterval(accountInterval);
             // console.log("obj 1 :"+result);
   
             if(result.status == 0x1)
             {
               alert(result.status)
               // console.log("obj "+result.status)
               resolve("Success");
               meta.router.navigate(['']);
               // window.location.reload();
             }
             else
             {
               // console.log("obj "+result.status)
               resolve("Failed");
               meta.router.navigate(['']);
               // window.location.reload();
             }
           }
         })
       },100)
     }) as Promise<string>;
   }
}



