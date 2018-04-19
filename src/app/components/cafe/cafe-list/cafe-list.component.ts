import { Component, OnInit } from '@angular/core';
import { CafeService } from '../../../services/cafe.service.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  userId: String;
  cafes: {};

  constructor(private cafeService: CafeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this.cafeService.findCafesByUserId(this.userId)
          .subscribe(cafes => {
              this.cafes = cafes;
          });
    });
    /*
    this.userId = this.activatedRoute.params['userId'];
    console.log(this.activatedRoute.params);
    this.cafeService.findCafesByUserId(this.userId)
        .subscribe(cafes => {
          this.cafes = cafes;
        });
    */
  }

}
