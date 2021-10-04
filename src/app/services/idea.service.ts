import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Idea } from '../core/models/Idea';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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

  createIdea(idea: Idea) {
    return this.http.post(this.apiUrl, idea, httpOptions)
    .pipe(
      tap(() => {
        this._ideas.getValue().push(idea);
        this._ideas.next(this._ideas.getValue());
      })
    )
  }
}
