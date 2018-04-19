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
  openHour: String;
  menus: {};
  reviews: {};
  images: {};
  phone: String;

  constructor(private activatedRoute: ActivatedRoute, private _cafeServie: CafeService, private router: Router) {}

  ngOnInit() {

      this.activatedRoute.params.subscribe(param=> {
          console.log(param)
          this.cafeProfileId = param['cafeId'];
          this._cafeServie.findCafeById(this.cafeProfileId)
              .subscribe(
                  (data: any) => {
                      console.log('Cafe by id: ', data);
                      this.name = data.name;
                      this.address = data.address;
                      this.openHour = data.open_hour;
                      this.menus = data.menus;
                      this.reviews = data.reviews;
                      this.images = data.images;
                      this.phone = data.phone;
                  }
              );
      });
  }
}
