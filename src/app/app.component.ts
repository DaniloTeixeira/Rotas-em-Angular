import { Component } from '@angular/core';

import { AuthService } from './login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLogged = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedEmitter.subscribe((login) => {
      this.isLogged = login;
      console.log('Usuário logado component');
    });
  }
}
