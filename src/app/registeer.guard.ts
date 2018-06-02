import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ContractService} from "./contract.service";
@Injectable()
export class RegisteerGuard implements CanActivate {
  constructor(public cs:ContractService,public router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.cs.isregister().then(result => {
     if(!result)
     {
       this.router.navigate(["register"]);
     }
     else
     {
       return true;
     }
    })
  }
}
