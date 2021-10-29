import { Component } from '@angular/core';

import { AuthService } from './login/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLogged$ = this.authService.isLogged$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
