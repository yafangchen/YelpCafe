import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.findAllUsers().subscribe(
      (data: any) => {
        console.log(data);
        this.users = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
