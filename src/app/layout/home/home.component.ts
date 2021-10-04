import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/core/models/Idea';
import { IdeaService } from 'src/app/services/idea.service';
import { MatDialog } from '@angular/material/dialog';
import { AddIdeaComponent } from '../modals/add-idea/add-idea.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allIdeas: Idea[] = [];

  constructor(
    private ideaService: IdeaService,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.ideaService.ideas.subscribe((ideas) => {
      if (ideas.length) {
        this.userService.getUserDetails().subscribe((user) => {
          this.allIdeas = ideas.map((idea) => {
            idea.isFavorite = user.favorites.indexOf(idea.id) > -1;
            return idea;
          });
        });
      }
    });
  }

  onFavoriteClick(event: any, idea: any) {
    this.userService
      .updateFavorite(event.id, event.isFavorite)
      .subscribe(() => {
        console.log('Added to favorites!');
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddIdeaComponent, {
      width: '250px',
      data: { name: 'test', animal: 'city' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
