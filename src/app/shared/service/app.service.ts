import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map'
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Company } from '../../models/company.model';
//import { User } from '../../models/user.model';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject'
// import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth': 'my token'
  })
};

@Injectable()
export class AppService {

  // private users = new BehaviorSubject<any>([]);
  // user = this.users.asObservable();

  private expressUrl = 'http://localhost:3000';
  //private countryApiUrl='https://restcountries.eu/rest/v2/all?fields=name';

  constructor(public http: HttpClient) { }

  createUser(data) {
    return this.http.post(`${this.expressUrl}/users`, JSON.stringify(data), httpOptions)
    
  }

  loginUser(data) { 
   return this.http.post(`${this.expressUrl}/users/login`,JSON.stringify(data),httpOptions)
  }

  // changeData(data){
  //   this.users.next(data);
  // }

  userSignInHttp(param) {
    const url = `${this.expressUrl}/users/login`;
    return this.http.post(url, JSON.stringify(param), httpOptions)
  }

  getUserlist(){
    return this.http.get(`${this.expressUrl}/users/getalluser`,httpOptions)
  }

}
