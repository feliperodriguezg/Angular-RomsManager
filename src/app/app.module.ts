import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ContainerComponent } from './commom/container/container.component';
import { HeaderComponent } from './commom/header/header.component';

import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { Globals } from './globals/globals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ContainerComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  providers: [DataService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule {
  public logged: boolean;

  constructor(private globals: Globals) {
    console.log('access_token: ' + this.globals.getAccessToken());
  }
}
