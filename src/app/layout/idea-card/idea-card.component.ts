import { Idea } from 'src/app/core/models/Idea';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.scss'],
})
export class IdeaCardComponent implements OnInit {
  @Input() public idea: Idea;
  @Output() favoriteClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFavoriteToggle() {
    this.idea.isFavorite = !this.idea.isFavorite;
    // todo: count should be updated in db as well
    const count = this.idea.likeCount;
    this.idea.likeCount = this.idea.isFavorite ? count + 1:  count - 1;
    this.favoriteClick.emit({ id: this.idea.id, isFavorite: this.idea.isFavorite });
  }
}
