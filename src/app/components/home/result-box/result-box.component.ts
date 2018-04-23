import {Component, Input, OnInit} from '@angular/core';
import { Cafe } from '../../../models/cafe.model.client';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.css']
})
export class ResultBoxComponent implements OnInit {

  @Input() result: Cafe;

  constructor() { }

  ngOnInit() {
  }

}
