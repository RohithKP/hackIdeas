import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/core/models/Idea';
import { IdeaService } from 'src/app/services/idea.service';
import { MatDialog } from '@angular/material/dialog';
import { AddIdeaComponent } from '../modals/add-idea/add-idea.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allIdeas: Idea[] = [];
  sortOder: string;

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
            idea.createdOn = formatDate(idea.createdOn, 'medium', 'en')
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
      width: '400px',
      data: { },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  sortByDate() {
    this.sortOder = this.sortOder === 'asc' ? 'desc': 'asc';
    if(this.sortOder === 'desc') {
      this.allIdeas.sort((a, b) => (new Date(b.createdOn)).getTime() -( new Date(a.createdOn)).getTime());
    } else {
      this.allIdeas.sort((a, b) => (new Date(a.createdOn)).getTime() -( new Date(b.createdOn)).getTime());
    }
  }
}
