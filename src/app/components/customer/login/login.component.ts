import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;

  constructor(
    private userService: UserService,
    private sharedService: SharedService,
    private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password).subscribe(
      (user: any) => {
        this.sharedService.user = user;
        switch (user.role) {
          case 'user': {
            this.router.navigate(['../user', user._id]);
            break;
          }
          case 'owner': {
            this.router.navigate(['../owner', user._id]);
            break;
          }
          case 'admin': {
            this.router.navigate(['../admin', user._id]);
            break;
          }
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
