import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

  public logged = false;
  public username: string;
  public access_token: string;
  public refresh_token: string;

  loggout(): void {
    this.logged = false;
    localStorage.clear();
  }

  public getAccessToken(): string {
    this.access_token = localStorage.getItem('access_token');
    if (this.access_token) {
      this.logged = true;
      this.username = localStorage.getItem('username');
    }
    return this.access_token;
  }
  public setAccessToken(token: string): void {
    localStorage.setItem('access_token', token);
  }
  public setUsername(username: string): void {
    localStorage.setItem('username', username);
    this.username = username;
  }

  constructor() { }

}
