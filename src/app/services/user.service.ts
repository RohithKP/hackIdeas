import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/models/Idea';
import { shareReplay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  private cache$: Observable<User>;

  constructor(private http: HttpClient) {}

  login(id: Number): Observable<User> {
    this.cache$ = this.http
      .get<User>(`${this.apiUrl}/${id}`)
      .pipe(shareReplay(1));

    return this.cache$;
  }

  getUserDetails() {
    return this.cache$;
  }
}
