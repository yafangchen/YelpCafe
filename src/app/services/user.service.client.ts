import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient, private router: Router, private sharedService: SharedService) {}

  baseUrl = environment.baseUrl;

  findAllUsers() {
    return this.httpClient.get(this.baseUrl + '/api/user/all');
  }

  login(username: String, password: String) {
    const body = {
      username : username,
      password : password
    };
    return this.httpClient.post(this.baseUrl + '/api/login', body, {withCredentials: true});
  }

  logout() {
    return this.httpClient.post(this.baseUrl + '/api/logout', '', {
      withCredentials: true,
      responseType: 'text'
    });
  }

  register(username: String, password: String, firstName: String, lastName: String, role = 'user') {
    const user = {
      username : username,
      password : password,
      firstName: firstName,
      lastName: lastName,
      role: role
    };
    return this.httpClient.post(this.baseUrl + '/api/register', user, {withCredentials: true});
  }

  loggedIn() {
    return this.httpClient.post(this.baseUrl + '/api/loggedIn', '', {withCredentials: true})
      .map(
        (user: any) => {
          if (user !== 0) {
            this.sharedService.user = user; // setting user so as to share with all components
            console.log(this.sharedService.user);
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }


  getCafesByOwnerId(ownerId) {
    return this.httpClient.get(this.baseUrl + 'api/owner/' + ownerId + '/cafes');
  }

  createUser(user) {
    return this.httpClient.post(this.baseUrl + '/api/user', user);
  }

  findUser(username, password) {
    return this.httpClient.get(this.baseUrl + '/api/user?username' + username + '&password=' + password);
  }

  findUserById(userId) {
    return this.httpClient.get(this.baseUrl + '/api/user/' + userId);
  }

  updateUser(userId, user) {
    return this.httpClient.put(this.baseUrl + '/api/user/' + userId, user);
  }

  deleteUser(userId) {
    return this.httpClient.delete(this.baseUrl + '/api/user/' + userId);
  }
}
