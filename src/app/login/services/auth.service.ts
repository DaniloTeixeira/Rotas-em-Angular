import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';

@Injectable()
export class AuthService {
  private usuarioAutenticado = false;

  isLoggedEmitter = new EventEmitter();

  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario): void {
    if (usuario.name === 'Danilo' && usuario.password === '123456') {
      this.usuarioAutenticado = true;
      this.isLoggedEmitter.emit(true);
      this.router.navigate(['/']);
      console.log('Usuário logado service');
    } else {
      this.usuarioAutenticado;
      this.isLoggedEmitter.emit(false);
    }
  }
}
