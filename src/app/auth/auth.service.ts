import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponse } from  './jwt-response';
import { tap } from  'rxjs/operators';
import * as auth from '.././utils'
import { Observable, BehaviorSubject } from  'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject  =  new  BehaviorSubject(false);
  constructor(private httpClient: HttpClient) { }

  login(user: any): Observable<JwtResponse> {
    return this.httpClient.post(`${auth.api}data/admin/login`, user).pipe(
      tap(async (res: JwtResponse) => {
        if (res.admin) {
          //localStorage.setItem("ACCESS_TOKEN", res.token);
          //localStorage.setItem("EXPIRES_IN", res.expires_in.toString());
          this.authSubject.next(true);
        }
      })
    );
  }

   isLoggedIn(){
    return  this.authSubject.asObservable();

  }

   logout(){
  //  localStorage.removeItem("ACCESS_TOKEN");
   // localStorage.removeItem("EXPIRES_IN");
    this.authSubject.next(false);
  }
  
}