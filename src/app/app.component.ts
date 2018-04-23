import { Component } from '@angular/core';
import {UserService} from './services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  logout() {
    this.userService.logout().subscribe(
      (data: any) => this.router.navigate(['']),
      (error: any) => console.log(error)
    );
  }
}
