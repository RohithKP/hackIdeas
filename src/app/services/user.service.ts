import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/models/Idea';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  private userData: User;

  constructor(private http: HttpClient) {}

  login(id: String | Number): Observable<User> {
    return this.http
      .get<User>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(user => this.userData = user)
        );
  }

  // Logic below are mainly for mocking the server update operations
  getUserDetails(): Observable<User> {
    if(!this.userData && localStorage.getItem('loggedIn')) {
      return this.login(localStorage.getItem('loggedIn'));
    }
    return of(this.userData);
  }

  updateFavorite(ideaId: Number, isFavorite: Boolean) {
      const apiUrl = `${this.apiUrl}/${this.userData.id}`;
      if(isFavorite) {
        this.userData.favorites.push(ideaId);
      } else {
        this.userData.favorites = this.userData.favorites.filter((id) => id !== ideaId);
      }
      return this.http.put(apiUrl, this.userData);
  }
}
