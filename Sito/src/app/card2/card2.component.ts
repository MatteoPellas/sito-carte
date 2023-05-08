import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
    data: Object | undefined;
    loading: boolean | undefined;
    o :Observable<Object> | undefined;
    constructor(public http: HttpClient) {}
    makeRequest(): void {
      console.log("here");
      this.loading = true;
      this.o = this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Slifer the Sky Dragon');
      this.o.subscribe(this.getData);
    }
    getData = (d : Object) =>
    {
      this.data = new Object(d);
      this.loading = false;
    }
    //Nota bene, questo è un metodo alternativo e compatto per fare la stessa cosa di 
    //makeRequest senza dichiarare la variabile Observable e creando l’arrow function   
    //direttamente dentro il metodo subscribe
    makeCompactRequest(): void {
      this.loading = true;
      this.http
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Slifer the Sky Dragon')
        .subscribe(newData => {
        this.data = newData;
        this.loading = false;
        });
       }
 

}
