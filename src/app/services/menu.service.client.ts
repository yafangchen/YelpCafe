import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    baseUrl = environment.baseUrl;

    findMenuById(menuId) {
        return this.httpClient.get(this.baseUrl + '/api/menu/' + menuId);
    }

    updateMenu(menuId, menu) {
        return this.httpClient.put(this.baseUrl + '/api/menu/' + menuId, menu);
    }

    deleteMenu(menuId) {
        return this.httpClient.delete(this.baseUrl + '/api/menu/' + menuId);
    }

    createMenu(cafeId, menu) {
        return this.httpClient.post(this.baseUrl + '/api/cafe/' + cafeId + '/menu', menu);
    }

    findMenusByCafeId(cafeId) {
        return this.httpClient.get(this.baseUrl + '/api/cafe/' + cafeId + '/menus');
    }
}
