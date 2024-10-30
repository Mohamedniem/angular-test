import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _HttpClient=inject(HttpClient)

 

  logindata(data:any):Observable<any>
  {
    return this._HttpClient.post('https://fakestoreapi.com/auth/login',data)
  }



}
