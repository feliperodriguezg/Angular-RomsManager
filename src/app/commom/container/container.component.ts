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

  }
  loadResults() {
    return this.serviceData.getAll()
    .subscribe(res => this.results = res);
  }
  search() {
    console.log('init search');
    return this.serviceData.searchGame(this.request)
    .subscribe((res) => this.results = res);
  }
  ngOnInit() {
    this.loadResults();
    this.route.queryParams.subscribe(query => {
      this.request.platform = query['platform'];
      this.request.search = query['name'];
      console.log('platform: ' + this.request.platform);
      console.log('search: ' + this.request.search);
      this.search();
    });

  }

}
