import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable , BehaviorSubject, first} from 'rxjs';
import { userData } from './userData'; 
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  currentUsers = new BehaviorSubject(null);
  
  constructor(private _HttpClient:HttpClient , private _Router:Router) { 


    if (localStorage.getItem('userData') != null) {
     let x:any
     x = localStorage.getItem('userData')  
     this.currentUsers.next(x);
    }

  } 


  register(registerFormValue:any):Observable<any>
  {
    return this._HttpClient.post('https://route-movies-api.vercel.app/signup' , registerFormValue)
  }


  login(loginFormValue:any):Observable<any>
  {
    this._Router.navigate(['/home'])
    return this._HttpClient.post('https://route-movies-api.vercel.app/signin' , loginFormValue)
  }

  logOut(){
    this.currentUsers.next(null);
    localStorage.clear() ;
    this._Router.navigate(['/login'])

  }


  // saveCurrentUser(first_name:any , last_name:any , email:any , token:any)
  saveCurrentUser(token:any)
  {
    let user = new userData(token);
    localStorage.setItem('userData' , JSON.stringify(token))
    this.currentUsers.next(token);
    
  }
}
