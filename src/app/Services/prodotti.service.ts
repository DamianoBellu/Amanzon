import { Injectable } from '@angular/core';
//import { PRODOTTI } from '../Data/prodotti';
import { Prodotto } from '../Models/prodotto';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//Dependency Injection

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private baseUrl = "https://fakestoreapi.com"
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>(`${this.baseUrl}/products`)
  }

  getCategories(): Observable<string[]>{
    return this.http.get<string[]>(`${this.baseUrl}/products/categories`)
  }


}

 