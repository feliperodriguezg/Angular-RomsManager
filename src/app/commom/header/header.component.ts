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

  opciones: Array<PlatformComponent> = [
    {id: 1, name: 'SNES'},
    {id: 2, name: 'NES'},
    {id: 3, name: 'MEGADRIVE'},
    {id: 4, name: 'NEOGEO'},
    {id: 5, name: 'ARCADE'}
  ];



  constructor() { }

  ngOnInit() {
  }

}
