import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import {Cafe} from '../models/cafe.model.client';

@Injectable()
export class SearchService {

  constructor(private _http: Http) {
  }

  nearCafeUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
  cafeDetailUrl = 'https://maps.googleapis.com/maps/api/place/details/json?';
  photoUrl = 'https://maps.googleapis.com/maps/api/place/photo?';
  options = new RequestOptions();

  getNearbyCafe(key: string, lat: number, lng: number, radius: number, type: string, keyword: string) {
    this.options.withCredentials = true;
    return this._http.get(this.nearCafeUrl + 'location=' + lat + ', ' + lng + '&radius=' + radius
      + '&type=' + type + '&keyword=' + keyword + '&key=' + key)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      });
  }

  getCafeDetail(key: string, place_id: string) {
    this.options.withCredentials = true;
    return this._http.get(this.cafeDetailUrl + 'placeid=' + place_id + '&key=' + key)
      .map((response: Response) => {
        return response.json();
      });
  }

  getPhoto(key: string, photoRef: string, maxWidth: number) {
    this.options.withCredentials = true;
    return this._http.get(this.photoUrl + 'maxwidth=' + maxWidth + '&photoreference=' + photoRef + '&key=' + key)
      .map((response: Response) => {
        return response;
      });
  }
}


  // // Change REST API to CORS API
  // createCorsRequest(method: string, url: string) {
  //   let xhr = new XMLHttpRequest();
  //
  //   if ('withCredentials' in xhr) {
  //     // XHR for Chrome/Firefox/Opera/Safari.
  //     xhr.open(method, url, true);
  //   } else {
  //     // CORS not supported
  //     xhr = null;
  //   }
  //   return xhr;
  // }
  //
  // // Make the actual CORS request
  // getNearbyCafe(key: string, lat: number, lng: number, radius: number, type: string, keyword: string) {
  //   const url = this.nearCafeUrl + 'location=' + lat + ', ' + lng + '&radius=' + radius + '&type=' + type + '&keyword=' + keyword
  //     + '&key=' + key;
  //
  //   const xhr = this.createCorsRequest('GET', url);
  //   if (!xhr) {
  //     console.log('CORS not supported!');
  //     return;
  //   }
  //
  //   // Handle response
  //   xhr.onload = function () {
  //     console.log(xhr.responseText);
  //     return xhr.responseText;
  //   };
  //
  //   xhr.onerror = function () {
  //     console.log('Woops, there was an error making the request!');
  //   };
  //
  //   xhr.send();
  // }
  //
  // getCafeDetail(key: string, place_id: string) {
  //   const url = this.cafeDetailUrl + 'placeid=' + place_id + '&key=' + key;
  //   const xhr = this.createCorsRequest('GET', url);
  //   if (!xhr) {
  //     console.log('CORS not supported!');
  //     return;
  //   }
  //   xhr.onload = function () {
  //     return xhr.responseText;
  //   };
  //   xhr.onerror = function () {
  //     console.log('Woops, there was an error making the request!');
  //   };
  //   xhr.send();
  // }
  //
  // getPhoto(key: string, photoRef: string, maxWidth: number) {
  //   const url = this.photoUrl + 'maxwidth=' + maxWidth + '&photoreference=' + photoRef + '&key=' + key;
  //   const xhr = this.createCorsRequest('GET', url);
  //   if (!xhr) {
  //     console.log('CORS not supported!');
  //     return;
  //   }
  //   xhr.onload = function () {
  //     return xhr.response;
  //   };
  //   xhr.onerror = function () {
  //     console.log('Woops, there was an error making the request!');
  //   };
  //   xhr.send();
  // }


