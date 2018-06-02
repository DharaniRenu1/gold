import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class HeadService {
private _url:string="/assets/data/employees1.json";
  constructor(public http:HttpClient) 
  {}
   
   getEmp():Observable<Employee[]>
   {
     return  this.http.get<Employee[]>(this._url)
     .catch(this.errorHandler);
   }
   errorHandler(error: HttpErrorResponse)
   {
     return Observable.throw(error.message || "server Error ");
   }
}
