import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdeaComponent } from './add-idea.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('AddIdeaComponent', () => {
  let component: AddIdeaComponent;
  let fixture: ComponentFixture<AddIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [MatDialogModule],
      declarations: [ AddIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
