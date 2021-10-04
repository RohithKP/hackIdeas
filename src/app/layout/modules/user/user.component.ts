import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/Idea';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userData: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((data) => {
      this.userData = data;
    });
  }

}
