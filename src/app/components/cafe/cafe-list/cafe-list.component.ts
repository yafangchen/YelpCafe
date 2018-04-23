import { Component, OnInit } from '@angular/core';
import {Cafe} from '../../../models/cafe.model.client';
import {SharedService} from '../../../services/shared.service.client';
import {CafeService} from '../../../services/cafe.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Cafe[];
  ownerId: string;
  user: any;

  constructor(
    private sharedService: SharedService,
    private cafeService: CafeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.route.params.subscribe(params => {
      this.ownerId = params['ownerId'];
      this.cafeService.getCafesByOwnerId(this.ownerId).subscribe(
        (cafes: Cafe[]) => {
          console.log('cafes: ', cafes);
          this.cafes = cafes;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

}
