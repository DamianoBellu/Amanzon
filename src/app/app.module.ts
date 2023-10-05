import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottiVetrinaComponent } from './Components/prodotti-vetrina/prodotti-vetrina.component';
import { ProdottoPreviewComponent } from './Components/prodotto-preview/prodotto-preview.component';
import { CarrelloComponent } from './Components/carrello/carrello.component';
import { CarrelloMiniComponent } from './Components/carrello-mini/carrello-mini.component';
import { HeaderComponent } from './Components/header/header.component';
import { CategorieSelettoreComponent } from './Components/categorie-selettore/categorie-selettore.component';
import { HomeComponent } from './Components/home/home.component';
import { ProdottoDetailComponent } from './Components/prodotto-detail/prodotto-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProdottiVetrinaComponent,
    ProdottoPreviewComponent,
    CarrelloComponent,
    CarrelloMiniComponent,
    HeaderComponent,
    CategorieSelettoreComponent,
    HomeComponent,
    ProdottoDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
