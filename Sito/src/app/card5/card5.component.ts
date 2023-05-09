import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../card1.module';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.css']
})
export class Card5Component {
  data: Root | undefined;
    loading: boolean | undefined;
    o :Observable<Root> | undefined;
    constructor(public http: HttpClient) {}
    makeRequest(): void {
      console.log("here");
      this.loading = true;
      this.o = this.http.get<Root>('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Galaxy Eyes Full Armor Photon Dragon');
      this.o.subscribe(this.getData);
    }
    getData = (d : Root) =>
    {
      this.data =(d);
      this.loading = false;
    }
    //Nota bene, questo è un metodo alternativo e compatto per fare la stessa cosa di 
    //makeRequest senza dichiarare la variabile Observable e creando l’arrow function   
    //direttamente dentro il metodo subscribe
 

}
