import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent implements OnInit {

  ownerId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ownerId = params['ownerId'];
    });
  }
}
