import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { SharedModule } from './shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdeaCardComponent } from './layout/idea-card/idea-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './layout/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddIdeaComponent } from './layout/modals/add-idea/add-idea.component';
import { IdeaDetailComponent } from './layout/modules/idea-detail/idea-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'user',
    loadChildren: () =>
      import('./layout/modules/user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdeaCardComponent,
    LoginComponent,
    AddIdeaComponent,
    IdeaDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
