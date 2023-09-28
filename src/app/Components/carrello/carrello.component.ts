import { Component } from '@angular/core';
import { Prodotto } from 'src/app/Models/prodotto';
import { CarrelloService } from 'src/app/Services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {
  prodotti:Prodotto[]=[];

  constructor(public carrelloService: CarrelloService){
    
  }
}
