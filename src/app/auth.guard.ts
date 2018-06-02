import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ContractService} from "./contract.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private cs:ContractService,private router:Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.cs.isregister().then(result => {
        console.log("Guard REsult"+result)       
          if (result)
          {
         alert("check")      
         this.router.navigate(["bank"]);
          }
          else
          {
            return true;        
          }
        })
}
}