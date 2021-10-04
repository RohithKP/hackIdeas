import { UserService } from './../../../services/user.service';
import { IdeaService } from 'src/app/services/idea.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/core/models/Idea';

interface Tag {
  label: string;
  selected: boolean;
}

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.scss'],
})
export class AddIdeaComponent implements OnInit {
  ideaForm: FormGroup;
  userData: User;
  allTags: Array<Tag> = [
    {
      label: 'feature',
      selected: false,
    },
    {
      label: 'tech',
      selected: false,
    },
    {
      label: 'aot',
      selected: false,
    },
    {
      label: 'ecom',
      selected: false,
    },
    {
      label: 'web',
      selected: false,
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<AddIdeaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private ideaService: IdeaService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.ideaForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.required]],
      description: [null, Validators.required],
      tags: [null],
    });

    this.userService.getUserDetails().subscribe((data) => {
      this.userData = data;
    });
  }

  submit() {
    if (!this.ideaForm.valid) {
      return;
    }
    this.ideaService
      .createIdea({
        id: Math.ceil(Math.random() * 1000),
        userId: this.userData.id,
        username: this.userData.name,
        likeCount: 0,
        createdOn: new Date().toISOString(),
        title: this.ideaForm.get('title').value,
        description: this.ideaForm.get('description').value,
        tags: this.allTags
          .filter((tag) => tag.selected)
          .map((tag) => tag.label),
      })
      .subscribe(() => {
        console.log('Idea posted successfully');
        this.close();
      });
  }

  close(): void {
    this.dialogRef.close({});
  }

  toggleSelection(tag: Tag) {
    tag.selected = !tag.selected;
  }
}
