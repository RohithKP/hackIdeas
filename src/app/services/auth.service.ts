import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  getAuthStatus() {
    return !!localStorage.getItem('loggedIn');
  }

  logout(): Observable<Boolean> {
    localStorage.removeItem('loggedIn');
    return of(true)
  }
}
