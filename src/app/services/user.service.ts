import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  private userIds: BehaviorSubject<Array<number>> = new BehaviorSubject([]);
  public readonly _userIds = this.userIds.asObservable();

  constructor(private http: HttpClient) {
    this.getAllUserIds();
  }

  login(id: number): Observable<User> {
    return this.http
      .get<User>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(user => this.userData = user)
        );
  }

  // Logic below are mainly for mocking the server update operations
  getUserDetails(): Observable<User> {
    if(!this.userData && localStorage.getItem('loggedIn')) {
      return this.login(+localStorage.getItem('loggedIn'));
    }
    return of(this.userData);
  }

  updateFavorite(ideaId: number, isFavorite: boolean) {
      const apiUrl = `${this.apiUrl}/${this.userData.id}`;
      if(isFavorite) {
        this.userData.favorites.push(ideaId);
      } else {
        this.userData.favorites = this.userData.favorites.filter((id) => id !== ideaId);
      }
      return this.http.put(apiUrl, this.userData);
  }

  getAllUserIds() {
    this.http.get<Array<User>>(this.apiUrl).subscribe((users) => {
      const ids = users.map(user => user.id);
      this.userIds.next(ids);
    })
  }
}
