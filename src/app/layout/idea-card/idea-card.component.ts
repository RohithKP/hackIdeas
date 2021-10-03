import { Idea } from 'src/app/core/models/Idea';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.scss']
})
export class IdeaCardComponent implements OnInit {
  @Input() public idea: Idea;
  @Output() favoriteClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFavoriteToggle() {
    this.favoriteClick.emit(this.idea.id);
  }
}
