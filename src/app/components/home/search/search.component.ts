import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import {Cafe} from '../../../models/cafe.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('f') public form: NgForm;
  public latitude: number;
  public longitude: number;
  @ViewChild('search') public searchElementRef: ElementRef;
  keyword: string;
  key: string;
  type: string;
  radius: number;
  cafes: Cafe[];

  loading: boolean;
  showResult: boolean;
  noGmap: boolean;

  // Variables for Google Map
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  placeService: google.maps.places.PlacesService;
  markers: google.maps.Marker[];

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private sharedService: SharedService
     ) {
  }

  ngOnInit() {
    // Initialize key, radius and type
    this.key = 'AIzaSyBKozXPSQr1_jDr3HKsqXHOEb3sviGOZG4';
    this.type = 'cafe';
    this.radius = 1500;
    this.cafes = [];

    this.loading = false;
    this.noGmap = true;

    this.markers = [];

    // Load places autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // Get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // Verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // Set latitude and longitude
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

          console.log('latitude: ' + this.latitude);
          console.log('longitude: ' + this.longitude);

          this.noGmap = false;

          // Initialize Google Map
          const mapProp = {
            center: new google.maps.LatLng(this.latitude, this.longitude),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
          this.sharedService.map = this.map;

          // Initialize Google place service
          this.placeService = new google.maps.places.PlacesService(this.map);
        });
      });
    });
  }

  onSubmit(): void {
    this.loading = true;
    this.showResult = false;
    this.cafes = [];
    this.keyword = this.form.value.cafeName;

    // Clear previous markers on the map
    for (let j = 0; j < this.markers.length; j++) {
      this.markers[j].setMap(null);
    }

    // In order to call 'this' in callback method
    const temp = this;

    this.placeService.nearbySearch({
      location: new google.maps.LatLng(this.latitude, this.longitude),
      radius: 1500,
      type: 'cafe',
      keyword: this.keyword
    }, function (results: google.maps.places.PlaceResult[], status: number) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('results length: ', results.length);
        for (let i = 0; i < results.length; i++) {
          console.log('result is: ', results[i]);

          // Create marker for each result on Google map
          const marker = new google.maps.Marker({
            position: results[i].geometry.location,
            map: temp.map,
            animation: google.maps.Animation.BOUNCE
          });

          temp.markers.push(marker);

          const place_id = results[i].place_id;
          const name = results[i].name;
          const address = results[i].vicinity;
          // TODO: should change the ownerId to owner 1 after mongodb set up
          const cafe = new Cafe(place_id, name, '');
          cafe.address = address;
          cafe.icon = results[i].icon;

          console.log('cafe is: ', cafe);

          // Check if the response result has photos
          if (results[i].photos !== undefined) {
            const photos = results[i].photos;
            cafe.avatar = photos[0].getUrl({'maxWidth': 500});
            cafe.photos = [];
            for (let j = 0; j < results[i].photos.length; j++) {
              cafe.photos[j] = results[i].photos[j].getUrl({'maxWidth': 500});
            }
            console.log('Cafe photos: ', cafe.photos);
          } else {
            cafe.avatar = '../../../../assets/images/undefined_cafe.jpg';
          }
          temp.cafes.push(cafe);
        }
        temp.loading = false;
        temp.showResult = true;
        console.log(temp.cafes);
      }
    });
  }
}
