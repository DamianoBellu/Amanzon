import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottiVetrinaComponent } from './Components/prodotti-vetrina/prodotti-vetrina.component';
import { ProdottoPreviewComponent } from './Components/prodotto-preview/prodotto-preview.component';
import { CarrelloComponent } from './Components/carrello/carrello.component';
import { CarrelloMiniComponent } from './Components/carrello-mini/carrello-mini.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottiVetrinaComponent,
    ProdottoPreviewComponent,
    CarrelloComponent,
    CarrelloMiniComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
