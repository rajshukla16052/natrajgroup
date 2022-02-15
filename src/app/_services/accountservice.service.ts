import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Accountinfo} from '../model/accountinfo'
import { Userlogininfo } from '../model/userlogininfo';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  url="http://localhost:3000/";
 constructor(public http:HttpClient) { }
 createaccount(accinfo:Accountinfo):Observable<Accountinfo>{
   console.log(accinfo)
   return this.http.post<Accountinfo>(this.url+'api/register',accinfo)
 }
 userlogin(logininfo:Userlogininfo):Observable<Userlogininfo>{ 
   return this.http.post<Userlogininfo>(this.url+'api/login',logininfo)
 }
}