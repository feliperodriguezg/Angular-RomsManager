
import { ItemResultadoComponent } from '../models/item_resultado.model.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  results: Array<ItemResultadoComponent> = [
    // tslint:disable-next-line:max-line-length
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    // tslint:disable-next-line:max-line-length
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    // tslint:disable-next-line:max-line-length
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    // tslint:disable-next-line:max-line-length
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    // tslint:disable-next-line:max-line-length
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    // tslint:disable-next-line:max-line-length
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    // tslint:disable-next-line:max-line-length
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' },
    // tslint:disable-next-line:max-line-length
    { id: 1, name: 'test', description: 'ooking back at our ngFor the next interesting thing to note is let item of items;. The let key is part of the Angular 2 template syntax. let creates a local variable that can be referenced anywhere in our template. So in our case we are creating a local variable let item.' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
