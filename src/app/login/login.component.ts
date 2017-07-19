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
  mostrarAlerta = false;
  private MensajeInputsVacios = 'Debe indicar usuario y password';
  private MensajeUsuarioIncorrecto = 'Usuario o password incorrecto';
  mensaje = 'Debe indicar usuario y password';
  login() {
    console.log(this.model.username);
    console.log(this.model.password);
    if (this.model.username && this.model.password) {

      if (this.model.username === 'felipe' && this.model.password === 'felipe') {
        this.mostrarAlerta = false;
        this.globals.logged = true;
        this.globals.setAccessToken('token_test');
        this.globals.setUsername(this.model.username);
        this.model.username = '';
        this.model.password = '';
        this.closeBtn.nativeElement.click();
        this.router.navigate(['/']);
      } else {
        this.mostrarAlerta = true;
        this.mensaje = this.MensajeUsuarioIncorrecto;
      }

    } else {
      this.mostrarAlerta = true;
      this.mensaje = this.MensajeInputsVacios;
    }

  }
  onSubmit() {}
  constructor(private router: Router, private globals: Globals) {
    console.log(this.globals.getAccessToken());
    this.mostrarAlerta = false;
  }
  ngOnInit() {
    this.mostrarAlerta = false;
  }
}
