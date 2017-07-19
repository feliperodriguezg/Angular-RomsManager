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
    {id: 1, name: 'snes'},
    {id: 2, name: 'nes'},
    {id: 3, name: 'megadrive'},
    {id: 4, name: 'neogeo'},
    {id: 5, name: 'arcade'}
  ];



  constructor(private globals: Globals, private route: Router) { }

  buscar() {
    console.log('click');
    let query = '';

    if (this.model.platform) {
      query = '?platform=' + this.model.platform;
    }

    if (this.model.search && this.model.platform.length > 0) {
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
