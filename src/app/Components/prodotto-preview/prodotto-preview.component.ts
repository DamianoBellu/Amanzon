import { Component, Input } from '@angular/core';
import { Prodotto, ProdottoACarrello } from 'src/app/Models/prodotto';
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
    let p: ProdottoACarrello = {
      id: this.prodotto!.id,
      title: this.prodotto!.title,
      price: this.prodotto!.price,
      qta: 1,
    }
    this.carrelloService.aggiungi(p);
  }
}

