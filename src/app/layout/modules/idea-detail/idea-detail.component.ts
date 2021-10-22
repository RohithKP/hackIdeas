import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.scss']
})
export class IdeaDetailComponent implements OnInit {
  public comment: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  addComment() {

  }
}
