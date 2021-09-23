import { Component, OnInit } from '@angular/core';

import { Usuario } from './models/Usuario';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  fazerLogin(): void {
    this.authService.fazerLogin(this.usuario);
  }
}
