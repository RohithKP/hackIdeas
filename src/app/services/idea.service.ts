import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Idea } from '../core/models/Idea';

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  private apiUrl = 'http://localhost:3000/ideas';
  private _ideas: BehaviorSubject<Array<Idea>> = new BehaviorSubject([]);

  public readonly ideas: Observable<Array<Idea>> = this._ideas.asObservable();

  constructor(private http: HttpClient) {
    this.getIdeas();
  }

  getIdeas() {
    return this.http.get<Idea[]>(this.apiUrl).subscribe((data) => {
      this._ideas.next(data);
    });
  }
}
