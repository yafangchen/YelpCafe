import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    baseUrl = environment.baseUrl;

    findAllUsers() {
        return this.httpClient.get(this.baseUrl + '/api/user/all');
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

    deleteUser(userId, user) {
        return this.httpClient.delete(this.baseUrl + '/api/user/' + userId);
    }
}
