import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    baseUrl = environment.baseUrl;

    createCafe(user) {
        return this.httpClient.post(this.baseUrl + '/api/user', user);
    }

    findUserByCredentials(username: String, password: String) {
        return this.httpClient.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    }

    findUserById(userId: String) {
        return this.httpClient.get(this.baseUrl + '/api/user/' + userId);
    }

    updateUser(user) {
        return this.httpClient.put(this.baseUrl + '/api/user/' + user._id, user);
    }

    deleteUser(userId: String) {
        return this.httpClient.delete(this.baseUrl + '/api/user/' + userId);
    }
}
