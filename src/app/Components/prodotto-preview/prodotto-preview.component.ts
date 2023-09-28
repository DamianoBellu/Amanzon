import { Component, Input } from '@angular/core';
import { Prodotto } from 'src/app/Models/prodotto';
import { CarrelloService } from 'src/app/Services/carrello.service';

@Component({
  selector: 'app-prodotto-preview',
  templateUrl: './prodotto-preview.component.html',
  styleUrls: ['./prodotto-preview.component.css']
})
export class ProdottoPreviewComponent {
  @Input()
  prodotto?: Prodotto;

  constructor(private carrelloService: CarrelloService){

  }

  aggiunta(){
    this.carrelloService.aggiungi(this.prodotto!);
    console.log(this.carrelloService.prodotti)
  }
}
