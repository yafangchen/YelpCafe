import { Component, OnInit } from '@angular/core';
import {Cafe} from '../../../models/cafe.model.client';
import {CafeService} from '../../../services/cafe.service.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service.client';
import {Menu} from '../../../models/menu.model.client';
import {Review} from '../../../models/review.model.client';
import {MenuService} from '../../../services/menu.service.client';
import {ReviewService} from '../../../services/review.service.client';

@Component({
  selector: 'app-cafe-view',
  templateUrl: './cafe-view.component.html',
  styleUrls: ['./cafe-view.component.css']
})
export class CafeViewComponent implements OnInit {

  cafe: Cafe;
  cafeId: string;
  loading: boolean;
  hasPhotos: boolean;
  // Array types occurs in a variable.
  Arr = Array;
  menu: Menu[];
  reviews: Review[];

  constructor(
    private sharedService: SharedService,
    private cafeService: CafeService,
    private menuService: MenuService,
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = [];
    this.reviews = [];
    this.loading = true;
    this.hasPhotos = true;

    this.route.params.subscribe(params => {
      this.cafeId = params['cafeId'];
      this.cafeService.getCafeById(this.cafeId).subscribe(
        (data: any) => {
          this.loading = false;
          console.log(data);
          this.cafe = data;
        },
        (error: any) => {
          console.log(error);
        }
      );

      this.menuService.findMenusByCafeId(this.cafeId).subscribe(
        (data: any) => {
          console.log(data);
          this.menu = data;
        },
        (error: any) => {
          console.log(error);
        }
      );

      this.reviewService.findReviewsByCafeId(this.cafeId).subscribe(
        (data: any) => {
          console.log(data);
          this.reviews = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

}
