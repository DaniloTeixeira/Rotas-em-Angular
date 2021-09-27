import { Injectable } from '@angular/core';

import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SignInRequest } from '../models/SignInRequest';
import { TokenResponse } from '../models/TokenResponse';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable()
export class AuthService {
  /*
  Subject: criador de observables padrão
  ReplaySubject: 
  BehaviorSubject:
  */
  isLogged$: Observable<boolean>;
  private _isLogged$ = new BehaviorSubject(false);

  constructor(private router: Router) {
    this.isLogged$ = this._isLogged$.asObservable();
    this.setIsLogged();
  }

  signIn(payLoad: SignInRequest): Observable<TokenResponse> {
    const isCredentialsCorrect =
      payLoad.email === 'danilo@email.com.br' && payLoad.password === '123456';

    if (isCredentialsCorrect) {
      return of(
        new TokenResponse({
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjIiLCJuYmYiOjE2MzI0MDA5MDAsImV4cCI6MTYzMjQ4NzMwMCwiaWF0IjoxNjMyNDAwOTAwfQ.adKYqHorQEnxQBYKgJ-iwj_35wE5WPMGOY3fzwZnQK8',
          tokenType: 'Bearer',
          expiresIn: '2021-09-25',
        })
      ).pipe(
        delay(2000),
        tap((response) => this.handleToken(response)),
        tap(() => this._isLogged$.next(true))
      );
    }
    this._isLogged$.next(false);
    return throwError('Credenciais incorretas');
  }

  signOut() {
    localStorage.clear();
    this._isLogged$.next(false);
    this.router.navigate(['/login']);
  }

  handleToken(response: TokenResponse): void {
    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('tokenType', response.tokenType);
    localStorage.setItem('expiresIn', response.expiresIn.toISOString());
  }

  private setIsLogged(): void {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      this._isLogged$.next(true);
    } else {
      this._isLogged$.next(false);
    }
  }

  isAutenticated() {
    return localStorage.getItem('accessToken') !== null ? true : false;
  }
}
