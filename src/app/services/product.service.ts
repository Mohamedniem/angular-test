import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _HttpClient=inject(HttpClient)

  constructor() { }


  getProduct():Observable<any>
  {
    return this._HttpClient.get('https://fakestoreapi.com/products')

  }
}
