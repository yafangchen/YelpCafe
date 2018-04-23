import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CafeService} from '../../../services/cafe.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Cafe} from '../../../models/cafe.model.client';

@Component({
  selector: 'app-cafe-new',
  templateUrl: './cafe-new.component.html',
  styleUrls: ['./cafe-new.component.css']
})
export class CafeNewComponent implements OnInit {

  @ViewChild('f') newCafeForm: NgForm;
  cafeName: string;
  address: string;
  phone: string;
  openHour: string;
  photos: string[];
  ownerId: string;

  constructor(
    private cafeService: CafeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.photos = [];
    this.route.params.subscribe(params => {
      this.ownerId = params['ownerId'];
    });
  }

  createCafe() {
    this.cafeName = this.newCafeForm.value.cafeName;
    this.address = this.newCafeForm.value.address;
    this.phone = this.newCafeForm.value.phone;
    this.photos.push(this.newCafeForm.value.photo1);
    this.photos.push(this.newCafeForm.value.photo2);
    this.photos.push(this.newCafeForm.value.photo3);
    this.photos.push(this.newCafeForm.value.photo4);
    this.photos.push(this.newCafeForm.value.photo5);
    this.openHour = this.newCafeForm.value.openHour;
    const cafe = new Cafe('', this.cafeName, this.ownerId);
    cafe.address = this.address;
    cafe.phone = this.phone;
    cafe.photos = this.photos;
    cafe.openHour = this.openHour;
    cafe.avatar = cafe.photos[0];

    this.cafeService.createCafe(this.ownerId, cafe).subscribe(
      (data: any) => {
        console.log('new cafe response: ', data);
        this.router.navigate(['../../cafe-list'], {relativeTo: this.route});
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
