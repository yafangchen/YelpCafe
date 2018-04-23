import { Component, Input, OnInit } from '@angular/core';
import {Menu} from '../../../models/menu.model.client';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() result: Menu;

  constructor() { }

  ngOnInit() {
  }

}
