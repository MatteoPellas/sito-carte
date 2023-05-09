import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { Root } from '../card1.module';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component {
    data: Root | undefined;
    loading: boolean | undefined;
    o :Observable<Root> | undefined;
    constructor(public http: HttpClient) {}

    makeRequest(): void {
      console.log("here");
      this.loading = true;
      this.o = this.http.get<Root>('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Blue-Eyes Alternative Ultimate Dragon');
      this.o.subscribe(this.getData);
    }
    getData = (d : Root) =>
    {
      this.data = (d);
      this.loading = false;
    }
    //https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Blue-Eyes Alternative Ultimate Dragon
    
}

