import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {MenuService} from '../../../services/menu.service.client';
import {Menu} from '../../../models/menu.model.client';

@Component({
  selector: 'app-menu-new',
  templateUrl: './menu-new.component.html',
  styleUrls: ['./menu-new.component.css']
})
export class MenuNewComponent implements OnInit {

  @ViewChild('f') newMenuForm: NgForm;
  description: string;
  price: string;
  photoUrl: string;
  cafeId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cafeId = params['cafeId'];
    });
  }

  createMenu() {
    this.description = this.newMenuForm.value.description;
    this.price = this.newMenuForm.value.price;
    this.photoUrl = this.newMenuForm.value.photo;
    const menu = new Menu(this.cafeId, this.photoUrl, this.price, this.description);
    menu.name = this.description;
    this.menuService.createMenu(this.cafeId, menu).subscribe(
      (data: any) => {
        console.log('create Menu: ', data);
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }
}
