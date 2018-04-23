import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.css']
})
export class OwnerProfileComponent implements OnInit {

  user: User;
  userId: string;
  updateFlag = false;
  updateMsg = 'Profile updated!';
  errorFlag = false;
  errorMsg = 'Username cannot be empty!';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {
    this.user = new User('', '', '', '', '', '', 'owner');
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    console.log(this.sharedService.user);
    this.errorFlag = false;
    this.updateFlag = false;

    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      return this.userService.findUserById(this.userId).subscribe(
        (user: any) => {
          this.user = user;
        },
        (error: any) => {
          this.errorFlag = true;
          console.log(error);
        }
      );
    });
  }

  updateUser() {
    this.errorFlag = false;
    this.updateFlag = false;
    if (!this.user.username || !this.user.password) {
      this.errorFlag = true;
      this.updateFlag = false;
      return;
    }
    this.userService.updateUser(this.userId, this.user).subscribe(
      (user: any) => {
        this.errorFlag = false;
        this.updateFlag = true;
        this.user = user;
        this.ngOnInit();
      },
      (error: any) => {
        this.errorFlag = true;
        console.log(error);
      }
    );
  }
}
