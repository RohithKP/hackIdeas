import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/core/models/Idea';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allIdeas: Idea[] = [];

  constructor(private ideaService: IdeaService) { }

  ngOnInit(): void {
    this.ideaService.getIdeas().subscribe((ideas) => {
      this.allIdeas = ideas;
    });
  }

  onFavoriteClick(id: Number, idea:any) {
    this.ideaService.updateFavorite().subscribe(() => {
      console.log('succss!')
    });
  }
}
