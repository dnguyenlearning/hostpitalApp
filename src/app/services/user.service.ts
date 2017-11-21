import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import { JwtHelper } from 'angular2-jwt';


@Injectable()
export class UserService {
  userToken:any;
  user:any;
  // private backendUrl="http://localhost:3000/";
  private backendUrl="";
  constructor(private http:Http) { }


  registerUser(newUser){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.backendUrl+'api/users/register',newUser,{headers:headers})
      .map(res=>res.json());
  }


  checkExistUser(value:String){
    return this.http.get(this.backendUrl+'api/users/'+value)
      .map(res=>res.json())
  }

  authenticateUser(user){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.backendUrl+'api/users/authenticate',user,{headers:headers})
      .map(res=>res.json());
  }

  storeUserDate(token,user){
    localStorage.setItem('hosipital_token',token);
    localStorage.setItem('hosipital_user',JSON.stringify(user));
    this.userToken=token;
    this.user=user;
  }

  isLoggedIn(){
    let jwtHelper=new JwtHelper();
    let token=localStorage.getItem('hosipital_token');
    if(!token){return false};
    let expirationDate=jwtHelper.getTokenExpirationDate(token);
    let isExpired=jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  loadToken(){
    const token=localStorage.getItem('hosipital_token');
    this.userToken= token;
  }

  
  logout(){
    this.userToken=null;
    this.user=null;
    localStorage.removeItem('hosipital_token');
    localStorage.removeItem('hosipital_user');
  }


}
