import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/core/models/Idea';
import { IdeaService } from 'src/app/services/idea.service';
import { tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allIdeas: Idea[] = [];

  constructor(
    private ideaService: IdeaService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    forkJoin([
      this.userService.getUserDetails(),
      this.ideaService.getIdeas(),
    ]).subscribe(
      ([user, ideas]) => {
        this.allIdeas = ideas.map(idea => {
          idea.isFavorite = user.favorites.indexOf(idea.id) > -1;
          return idea;
        })
      },
      (error) => {
        console.log('Data fetch error', error);
      }
    );
  }

  onFavoriteClick(event: any, idea: any) {
    this.userService
      .updateFavorite(event.id, event.isFavorite)
      .subscribe(() => {
        console.log('succss!');
      });
  }
}
