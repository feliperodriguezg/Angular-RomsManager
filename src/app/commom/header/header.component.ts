import { SearchRequest } from '../models/item_request';
import { Router } from '@angular/router';
import { Globals } from '../../globals/globals.component';
import { PlatformComponent } from '../models/platform.model.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['platform', 'search']
})

export class HeaderComponent implements OnInit {

  platform = 'SNES';
  search = 'test';
  model = new SearchRequest();

  opciones: Array<PlatformComponent> = [
    {id: 1, name: 'SNES'},
    {id: 2, name: 'NES'},
    {id: 3, name: 'MEGADRIVE'},
    {id: 4, name: 'NEOGEO'},
    {id: 5, name: 'ARCADE'}
  ];



  constructor(private globals: Globals, private route: Router) { }

  buscar() {
    console.log('click');
    let query = '?platform=' + this.model.platform;
    if(this.model.search){
      query = query + '&name=' + this.model.search;
    }
    this.route.navigateByUrl(query);
  }

  getStatus(): boolean {
    return this.globals.logged;
  }

  logout() {
    this.globals.loggout();
  }

  ngOnInit() {
  }

}
