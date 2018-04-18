import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class CafeService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    baseUrl = environment.baseUrl;

    createCafe(userId, cafe) {
        return this.httpClient.post(this.baseUrl + '/api/user/' + userId + '/cafe', cafe);
    }

    findCafeById(cafeId: String) {
        console.log('--==--' + 'url:' + this.baseUrl + ', cafeId:' + cafeId);
        return this.httpClient.get(this.baseUrl + '/api/cafe/' + cafeId);
    }

    updateCafe(cafe) {
        return this.httpClient.put(this.baseUrl + '/api/cafe/' + cafe._id, cafe);
    }

    deleteCafe(cafeId: String) {
        return this.httpClient.delete(this.baseUrl + '/api/cafe/' + cafeId);
    }

    findCafesByUserId(userId: String) {
        return this.httpClient.get(this.baseUrl + '/api/user/' + userId + '/cafes');
    }
}
