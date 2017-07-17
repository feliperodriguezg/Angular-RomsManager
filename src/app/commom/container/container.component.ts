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
  constructor(private serviceData: DataService) {
  }
  loadResults() {
    return this.serviceData.getAll()
    .subscribe(res => this.results = res);
  }
  search() {
    const request = new SearchRequest();
    request.platform = this.platform;
    return this.serviceData.searchGame(request)
    .subscribe((res) => this.results = res);
  }
  ngOnInit() {
    this.loadResults();
  }

}
