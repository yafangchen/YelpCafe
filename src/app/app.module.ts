import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';
import { Routing } from './app.routing';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/customer/login/login.component';
import { ProfileComponent } from './components/customer/profile/profile.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { CafeListComponent } from './components/cafe/cafe-list/cafe-list.component';
import { CafeNewComponent } from './components/cafe/cafe-new/cafe-new.component';
import { CafeEditComponent } from './components/cafe/cafe-edit/cafe-edit.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { SearchComponent } from './components/home/search/search.component';
import { FooterComponent } from './components/home/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CafeViewComponent } from './components/cafe/cafe-view/cafe-view.component';

import {CafeService} from './services/cafe.service.client';
import {SharedService} from './services/shared.service';
import {MenuService} from './services/menu.service.client';
import {ReviewService} from './services/review.service.client';
import {UserService} from './services/user.service.client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    CafeListComponent,
    CafeNewComponent,
    CafeEditComponent,
    HomeComponent,
    LandingComponent,
    SearchComponent,
    FooterComponent,
    CafeViewComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgxCarouselModule,
      Routing
  ],
  providers: [CafeService, SharedService, UserService, MenuService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
