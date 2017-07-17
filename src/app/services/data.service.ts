import { SearchRequest } from '../commom/models/item_request';
import { Observable } from 'rxjs/Rx';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Injectable } from '@angular/core';
import { ItemResultadoComponent } from '../commom/models/item_resultado.model.component';
import { Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
    private urlApi = 'assets/data/gamelist.json';

    constructor(private http: Http) { }

  getAll(): Observable<ItemResultadoComponent[]> {
      return this.http.get(this.urlApi).map( (res: Response) => res.json());
  }

  searchGame(body: SearchRequest): Observable<ItemResultadoComponent[]> {
      const options = new RequestOptions();
      options.headers.append('Content-Type', 'application/json');
      options.headers.append('Authorization', 'Bearer ');
      return this.http.post(this.urlApi, body, options).map((res: Response) => res.json());
  }

}
