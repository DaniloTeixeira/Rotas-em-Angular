import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {}

  getUserByName(name: string): Observable<any> {
    const url = `https://api.github.com/users/${name}`;
    return this.http.get<any>(url);
  }
}

// https://api.github.com/users/joserubensveiga
