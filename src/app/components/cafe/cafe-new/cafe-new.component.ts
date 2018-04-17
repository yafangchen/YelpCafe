import {Component, OnInit, ViewChild} from '@angular/core';
import { CafeService } from '../../../services/cafe.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-cafe-new',
    templateUrl: './cafe-new.component.html',
    styleUrls: ['./cafe-new.component.css']
})
export class CafeNewComponent implements OnInit {
    @ViewChild('f') websiteNewForm: NgForm;
    userId: String;
    cafe = {};

    constructor(private cafeService: CafeService, private activatedRoute: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        this.userId = this.activatedRoute.params['userId'];
    }

    addCafe() {
        this.cafeService.createCafe(this.userId, this.cafe)
            .subscribe(
                (data: any) => this.router.navigate(['user/', this.userId, 'cafes']),
                (error: any) => console.log(error)
            );
    }
}

