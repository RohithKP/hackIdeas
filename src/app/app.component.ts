import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'hackIdeas';
  opened: boolean = false;
  userSub: Subscription;
  loggedInUserId: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loggedInUserId = +localStorage.getItem('loggedIn');
    if (this.loggedInUserId) {
      this.userSub = this.userService.getUserDetails().subscribe();
    }
  }

  hasRoute(route: String) {
    return this.router.url === route;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.opened = false;
      this.router.navigate(['/login']);
    });
  }

  ngOnDestroy() {
    if(this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
