import {Component, OnInit, ViewChild} from '@angular/core';
import {Cafe} from '../../../models/cafe.model.client';
import {ActivatedRoute} from '@angular/router';
import {} from '@types/googlemaps';
import {SharedService} from '../../../services/shared.service.client';
import {Menu} from '../../../models/menu.model.client';
import {Review} from '../../../models/review.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cafe-profile',
  templateUrl: './cafe-profile.component.html',
  styleUrls: ['./cafe-profile.component.css']
})
export class CafeProfileComponent implements OnInit {

  cafe: Cafe;
  map: google.maps.Map;
  loading: boolean;
  hasPhotos: boolean;
  // Array type captured in a variable
  Arr = Array;

  // TODO: change it after db set up.
  menu: Menu[];
  reviews: Review[];
  reviewContent: string;

  @ViewChild('f') reviewForm: NgForm;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.cafe = new Cafe('', '', '');
    this.map = this.sharedService.map;
    this.loading = true;
    this.hasPhotos = false;

    this.menu = [
      new Menu('', '../../../../assets/images/menu1.jpg', '$2.0', 'Blonde Americano'),
      new Menu('', '../../../../assets/images/menu2.jpg', '$3.5', 'Caffe Misto'),
      new Menu('', '../../../../assets/images/menu3.jpg', '$4.5', 'Toasted Coconut Cold Brew'),
      new Menu('', '../../../../assets/images/menu4.jpg', '$3.0', 'Nitro Cold Brew'),
      new Menu('', '../../../../assets/images/menu5.jpg', '$2.0', 'Double Mocha'),
      new Menu('', '../../../../assets/images/menu6.jpg', '$3.5', 'Cold Coffee with Milk'),
      new Menu('', '../../../../assets/images/menu7.jpg', '$4.5', 'Cold Foam Cascara Cold Brew'),
      new Menu('', '../../../../assets/images/menu8.jpg', '$5.0', 'Nitro Cold Brew'),
      new Menu('', '../../../../assets/images/menu9.jpg', '$3.0', 'Caffe Latte'),
      new Menu('', '../../../../assets/images/menu10.jpg', '$4.5', 'Caffe Mocha'),
      new Menu('', '../../../../assets/images/menu11.jpg', '$6.0', 'Flat White'),
      new Menu('', '../../../../assets/images/menu12.jpg', '$3.5', 'Espresso Macchiato'),
      new Menu('', '../../../../assets/images/menu13.jpg', '$2.5', 'Espresso Con Panna'),
      new Menu('', '../../../../assets/images/menu14.jpg', '$4.5', 'Iced Vanilla Latte'),
      new Menu('', '../../../../assets/images/menu15.jpg', '$5.0', 'Vanilla Latte')
    ];

    this.reviews = [
      new Review('', '', '', 'great!'),
      new Review('', '', '', 'This Cafe is be best one I have ever been.'),
      new Review('', '', '', 'I like the Mocha and Latte made by the cafe owner, it tastes so good!')
    ];

    // Initialize PlaceDetail service
    const service = new google.maps.places.PlacesService(this.map);

    this.route.params.subscribe(params => {
      this.cafe.placeId = params['place_id'];

      const temp = this;

      // Request for PlaceDetail Service
      service.getDetails({
        placeId: temp.cafe.placeId
      }, function (place: google.maps.places.PlaceResult, detailStatus: number) {
        if (detailStatus === google.maps.places.PlacesServiceStatus.OK) {
          temp.cafe.name = place.name;
          temp.cafe.address = place.vicinity;
          temp.cafe.icon = place.icon;
          temp.cafe.isOpen = place.opening_hours.open_now;
          temp.cafe.priceLevel = place.price_level;
          temp.cafe.phone = place.formatted_phone_number;
          temp.cafe.weekdayText = place.opening_hours.weekday_text;
          temp.cafe.rating = place.rating;
          temp.cafe.priceLevel = place.price_level;

          temp.cafe.photos = [];
          if (place.photos !== undefined) {
            temp.hasPhotos = true;
            temp.cafe.avatar = place.photos[0].getUrl({maxWidth: 800, maxHeight: 500});
            for (let i = 0; i < place.photos.length; i++) {
              temp.cafe.photos[i] = place.photos[i].getUrl({maxWidth: 500});
            }
          } else {
            temp.cafe.avatar = '../../../../assets/images/cafe5.jpg';
          }
          temp.loading = false;
          console.log(temp.cafe);
        }
      });
    });
  }

  addReview() {
    this.reviewContent = this.reviewForm.value.review;

    // TODO: user ReviewService to submit this review to db.
    console.log(this.reviewContent);
  }
}
