import { Injectable } from '@angular/core';
import {Cafe} from '../models/cafe.model.client';
import {} from '@types/googlemaps';

@Injectable()
export class SharedService {
  cafe: Cafe;
  customer = null;
  map: google.maps.Map;
  user = null;
}
