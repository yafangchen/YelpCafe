import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    baseUrl = environment.baseUrl;

    getCafesByOwnerId(ownerId) {
        return this.httpClient.get(this.baseUrl + 'api/owner/' + ownerId + 'cafes');
    }

    getCafeById(cafeId) {
        return this.httpClient.get(this.baseUrl + 'api/cafe/' + cafeId);
    }

    updateCafe(cafeId, cafe) {
        return this.httpClient.put(this.baseUrl + 'api/cafe' + cafeId, cafe);
    }

    deleteCafe(cafeId) {
        return this.httpClient.delete(this.baseUrl + 'api/cafe/' + cafeId);
    }

    createCafe(ownerId, cafe) {
        return this.httpClient.post(this.baseUrl + '/api/owner/' + ownerId + '/cafe', cafe);
    }
}
