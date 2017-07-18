import { Globals } from '../globals/globals.component';
import { Router } from '@angular/router';
import { LoginRequest } from '../commom/models/login_request.model.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  model = new LoginRequest();
  closeModal = false;
  login() {
    console.log(this.model.username);
    console.log(this.model.password);
    this.globals.logged = true;
    this.globals.setAccessToken('token_test');
    this.globals.setUsername(this.model.username);
    this.closeBtn.nativeElement.click();
    this.router.navigate(['/']);
  }
  onSubmit() {}
  constructor(private router: Router, private globals: Globals) {
    console.log(this.globals.getAccessToken());
  }
  ngOnInit() {}
}
