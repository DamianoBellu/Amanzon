import { Injectable } from '@angular/core';
import { Prodotto } from '../Models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  prodotti: Prodotto[] = [];

  constructor() { }

  aggiungi(prodotto: Prodotto){
    this.prodotti.push(prodotto);
  }
}
