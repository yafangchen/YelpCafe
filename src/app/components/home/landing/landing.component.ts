import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  images: string[];

  public carouselBannerItems: Array<any> = [];
  public carouselBanner: NgxCarousel;

  public titles: string[];

  constructor() {
  }

   ngOnInit() {
  //   this.images = [
  //     '../../../../assets/images/cafe1.jpg',
  //     '../../../../assets/images/cafe2.jpg',
  //     '../../../../assets/images/cafe3.jpg',
  //     '../../../../assets/images/cafe9.jpg'
  //   ];
  //
  //   this.titles = [
  //     'Yelp Cafe',
  //     'Introduce the best cafe nearby for you',
  //     'Warm',
  //     'Helpful',
  //     'Start your coffee trip here...'
  //   ];
  //
  //   this.carouselBanner = {
  //     grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
  //     slide: 4,
  //     speed: 500,
  //     interval: 5000,
  //     point: {
  //       visible: true,
  //       pointStyles: `
  //         .ngxcarouselPoint {
  //           list-style-type: none;
  //           text-align: center;
  //           padding: 12px;
  //           margin: 0;
  //           white-space: nowrap;
  //           overflow: auto;
  //           position: absolute;
  //           width: 100%;
  //           bottom: 20px;
  //           left: 0;
  //           box-sizing: border-box;
  //         }
  //         .ngxcarouselPoint li {
  //           display: inline-block;
  //           border-radius: 999px;
  //           background: rgba(255, 255, 255, 0.55);
  //           padding: 5px;
  //           margin: 0 3px;
  //           transition: .4s ease all;
  //         }
  //         .ngxcarouselPoint li.active {
  //             background: white;
  //             width: 10px;
  //         }
  //       `
  //     },
  //     load: 2,
  //     custom: 'banner',
  //     touch: true,
  //     loop: true,
  //     easing: 'cubic-bezier(0, 0, 0.2, 1)'
  //   };
  }
}
