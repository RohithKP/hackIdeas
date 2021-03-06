import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [{ path: ':id', component: UserComponent }];

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule],
})
export class UserModule {}
