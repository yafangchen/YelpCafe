import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: String;

  constructor() { }

  ngOnInit() {
    this.userId = 'abd577d30043a839dd48ae46';
    console.log(this.userId);
  }

}
