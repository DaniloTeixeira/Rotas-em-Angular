import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignInRequest } from './models/SignInRequest';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signIn(): void {
    this.authService
      .signIn(new SignInRequest({ email: this.email, password: this.password }))
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        () => {
          alert('Credenciais incorretas');
        }
      );
  }
}
