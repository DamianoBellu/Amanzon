import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amanzon';

  paginaCorrente = "v";

  naviga(pagina: string){
    this.paginaCorrente = pagina;
  }
}
