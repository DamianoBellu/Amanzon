import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ProdottiService } from 'src/app/Services/prodotti.service';

@Component({
  selector: 'app-categorie-selettore',
  templateUrl: './categorie-selettore.component.html',
  styleUrls: ['./categorie-selettore.component.css']
})
export class CategorieSelettoreComponent implements OnInit {
  categorie: string[] = [];

  constructor(private prodottiService: ProdottiService){

  }

  ngOnInit(): void {
    this.prodottiService.getCategories().subscribe( dati => {
      this.categorie = dati;
    })
  }
}
