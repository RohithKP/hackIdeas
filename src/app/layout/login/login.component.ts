import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/Idea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  name: String;
  empId: Number;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.userService.login(this.empId).subscribe((data: User) => {
      console.log(data);
      localStorage.setItem('loggedIn', (data.id).toString());
      this.router.navigate(['/']);
    });
  }
}
