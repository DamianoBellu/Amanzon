import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottiVetrinaComponent } from './Components/prodotti-vetrina/prodotti-vetrina.component';
import { CarrelloComponent } from './Components/carrello/carrello.component';
import { HomeComponent } from './Components/home/home.component';
import { ProdottoDetailComponent } from './Components/prodotto-detail/prodotto-detail.component';

const routes: Routes = [
  {
    path:"vetrina", component: ProdottiVetrinaComponent
  },

  {
    path:"carrello", component: CarrelloComponent
  },

  {
    path:"home", component: HomeComponent
  },

  {
    path:"prodotti/:id", component: ProdottoDetailComponent
  },

  {
    path:"", redirectTo: "/home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
