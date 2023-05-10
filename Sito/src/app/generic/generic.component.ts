import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { Root } from '../card1.module';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  data: Root | undefined;
  loading: boolean | undefined;
  o :Observable<Root> | undefined;
  s!: String | null;

  constructor(public http: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (uri_param); //Stampo su console
    this.s = uri_param
    //this.service.getTrack()
  }


  makeRequest(): void {
      
    console.log("here");
    this.loading = true;
    this.o = this.http.get<Root>('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + this.s);
    this.o.subscribe(this.getData);
  }
  getData = (d : Root) =>
  {
    this.data = (d);
    this.loading = false;
  }

}
