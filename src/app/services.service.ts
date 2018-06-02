import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from './shared/hero';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ServicesService {
    public _url : string ="/assets/data/hero1.json";
  constructor(public http:HttpClient) { }
    getHeroes():Observable<Hero[]>
    {
      return this.http.get<Hero[]>(this._url)
      .catch(this.errorHandler);
    }
      errorHandler(error : HttpErrorResponse)
      {
        return Observable.throw(error.message || " server error ");
      }
  
}
