import { Injectable } from '@angular/core';
import { PRODOTTI } from '../Data/prodotti';
import { Prodotto } from '../Models/prodotto';

//Dependency Injection

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor() { }

  getAll(): Prodotto[]{
    return PRODOTTI;
  }

}
