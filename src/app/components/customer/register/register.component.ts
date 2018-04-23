import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;
  // user: User;
  username: string;
  password: string;
  vpassword: string;
  firstName: string;
  lastName: string;
  role: string;
  roleValues: string[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.roleValues = ['user', 'owner', 'admin'];
    console.log('roule values: ', this.roleValues);
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.vpassword = this.registerForm.value.vpassword;
    this.firstName = this.registerForm.value.firstname;
    this.lastName = this.registerForm.value.lastname;

    console.log(this.username);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.password);
    console.log(this.vpassword);

    if (this.password === this.vpassword) {
      this.userService.register(this.username, this.password, this.firstName, this.lastName, this.role).subscribe(
        (data: User) => {
          switch (this.role) {
            case 'user': {
              this.router.navigate(['../user', data._id]);
              break;
            }
            case 'owner': {
              this.router.navigate(['../owner', data._id]);
              break;
            }
            case 'admin': {
              this.router.navigate(['../admin', data._id]);
              break;
            }
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
    console.log('The user has registered!');
  }

  onRoleChange(roleValue: string) {
    this.role = roleValue;
    console.log(this.role);
  }
}
