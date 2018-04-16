import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CafeService } from '../../../services/cafe.service.client';

@Component({
  selector: 'app-cafe-view',
  templateUrl: './cafe-view.component.html',
  styleUrls: ['./cafe-view.component.css']
})
export class CafeViewComponent implements OnInit {
  cafeProfileId: String;
  name: String;
  address: String;
  openHour: String
  menus: Array;
  reviews: Array;
  constructor(private activatedRoute: ActivatedRoute, private _cafeServie: CafeService, private router: Router) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
          this.cafeProfileId = params['cafeProfileId'];
      });
      this._cafeServie.findCafeById(this.cafeProfileId)
          .subscribe(
              (data: any) => {
                  console.log('website by id: ', data);
                  this.name = data.name;
                  this.address = data.address;
                  this.openHour = data.open_hour;
                  this.menus = data.menus;
                  this.reviews = data.reviews;
              }
          );
  }
}
