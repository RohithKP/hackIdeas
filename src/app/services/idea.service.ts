import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea } from '../core/models/Idea';

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  private apiUrl = 'http://localhost:3000/ideas';

  constructor(private http: HttpClient) {}

  getIdeas(): Observable<Idea[]> {
    return this.http.get<Idea[]>(this.apiUrl);
  }

  updateFavorite(): Observable<Idea[]> {
    const apiUrl = 'http://localhost:3000/users/11';
    return this.http.put<Idea[]>(apiUrl, { "favorites": [3] });
  }
}
