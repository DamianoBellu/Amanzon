import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/Models/prodotto';
import { ProdottiService } from 'src/app/Services/prodotti.service';


@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrls: ['./prodotti-vetrina.component.css']
})
export class ProdottiVetrinaComponent implements OnInit {

  prodotti: Prodotto[] = [];

  constructor(private prodottiService : ProdottiService){

  }

  ngOnInit(): void {
    this.prodottiService.getProducts().subscribe(dati => {
      this.prodotti = dati;
    });
    //this.prodotti = this.prodottiService.getAll();
  }
}
