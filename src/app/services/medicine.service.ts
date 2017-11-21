import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MedicineService {
  // private backendUrl="http://localhost:3000/";
  private backendUrl="";
  userToken:any;
  user:any;

  constructor(private http:Http) { }

  getMedicines(){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.get(this.backendUrl+'api/medicines/all',{headers:headers})
    .map(res=>res.json());
  }

  addNewMedicine(newMedicine){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.post(this.backendUrl+'api/create/medicine',newMedicine,{headers:headers})
    .map(res=>res.json());
  }
  getContentMedicine(medicineId){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.get(this.backendUrl+'api/medicines/all/' + medicineId , {headers:headers})
    .map(res=>res.json());
  }
  updateMedicine(Id,newMedicine){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.put(this.backendUrl+'api/medicines/update/' + Id, newMedicine , {headers:headers})
    .map(res=>res.json());
  }


  deleteMedicine(id){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.delete(this.backendUrl+'api/medicines/delete/' + id , {headers:headers})
    .map(res=>res.json());
  }

  loadToken(){
    const token=localStorage.getItem('hosipital_token');
    this.userToken= token;
  }

}
