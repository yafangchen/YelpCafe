import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    baseUrl = environment.baseUrl;

    findReviewById(reviewId) {
        return this.httpClient.get(this.baseUrl + '/api/review/' + reviewId);
    }

    updateReview(reviewId, review) {
        return this.httpClient.put(this.baseUrl + '/api/review/' + reviewId);
    }

    deleteReview(reviewId) {
        return this.httpClient.delete(this.baseUrl + '/api/review/'  +reviewId);
    }

    createReview(cafeId, userId, review) {
        return this.httpClient.post(this.baseUrl + '/api/review?cafeId=' + cafeId + '&userId=' + userId, review);
    }

    findReviewsByCafeId(cafeId) {
        return this.httpClient.get(this.baseUrl + '/api/cafe/' + cafeId + '/reviews');
    }

    findReviewsByUserId(userId) {
        return this.httpClient.get(this.baseUrl + '/api/user/' + userId + '/reviews');
    }
}
