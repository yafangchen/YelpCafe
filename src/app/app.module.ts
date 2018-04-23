import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { routing } from './app.routing';
import {HttpClientModule} from '@angular/common/http';

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

import { ResultBoxComponent } from './components/home/result-box/result-box.component';
import { CafeProfileComponent } from './components/cafe/cafe-profile/cafe-profile.component';
import { OwnerProfileComponent } from './components/owner/owner-profile/owner-profile.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { OwnerHomeComponent } from './components/owner/owner-home/owner-home.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { CafeImageComponent } from './components/cafe/cafe-image/cafe-image.component';
import { MenuItemComponent } from './components/cafe/menu-item/menu-item.component';

import { SearchService } from './services/search.service.client';
import { SharedService } from './services/shared.service.client';
import { UserService } from './services/user.service.client';
import { CafeService } from './services/cafe.service.client';
import { MenuService } from './services/menu.service.client';
import { ReviewService } from './services/review.service.client';
import { CafeViewComponent } from './components/cafe/cafe-view/cafe-view.component';
import { MenuNewComponent } from './components/cafe/menu-new/menu-new.component';
import { CutomerHomeComponent } from './components/customer/cutomer-home/cutomer-home.component';


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
    ResultBoxComponent,
    CafeProfileComponent,
    OwnerProfileComponent,
    AdminProfileComponent,
    AdminHomeComponent,
    OwnerHomeComponent,
    UserListComponent,
    CafeImageComponent,
    MenuItemComponent,
    CafeViewComponent,
    MenuNewComponent,
    CutomerHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCarouselModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKozXPSQr1_jDr3HKsqXHOEb3sviGOZG4',
      libraries: ['places']
    }),
    routing
  ],
  providers: [
    SearchService,
    SharedService,
    UserService,
    CafeService,
    MenuService,
    ReviewService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
