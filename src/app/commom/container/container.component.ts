import { ActivatedRoute } from '@angular/router';
import { Globals } from '../../globals/globals.component';
import { HeaderComponent } from '../header/header.component';
import { SearchRequest } from '../models/item_request';
import { Observable, Subscription } from 'rxjs/Rx';
import { ItemResultadoComponent } from '../models/item_resultado.model.component';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  platform: string;
  // tslint:disable-next-line:member-ordering
  results: ItemResultadoComponent[];
  request = new SearchRequest();

  constructor(private serviceData: DataService, private globals: Globals, private route: ActivatedRoute) {
    console.log(this.route.queryParams['platform']);
  }
  loadResults() {
    return this.serviceData.getAll()
    .subscribe(res => this.results = res);
  }
  search() {
    this.request.platform = this.platform;
    return this.serviceData.searchGame(this.request)
    .subscribe((res) => this.results = res);
  }
  ngOnInit() {
    console.log('init');
    this.loadResults();
    this.route.queryParams.subscribe(query => this.request.platform = query['platform']);
    this.route.queryParams.subscribe(query => this.request.search = query['name']);
    console.log('plataforma: ' + this.request.platform);
    console.log('búsqueda: ' + this.request.search);
  }

}
