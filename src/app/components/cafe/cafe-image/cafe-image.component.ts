import {Component, Input, OnInit} from '@angular/core';
import {Cafe} from '../../../models/cafe.model.client';

@Component({
  selector: 'app-cafe-image',
  templateUrl: './cafe-image.component.html',
  styleUrls: ['./cafe-image.component.css']
})
export class CafeImageComponent implements OnInit {

  @Input() result: string;

  constructor() { }

  ngOnInit() {
  }

}
