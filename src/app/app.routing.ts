import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/customer/login/login.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { ProfileComponent} from './components/customer/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { OwnerProfileComponent } from './components/owner/owner-profile/owner-profile.component';
import { ModuleWithProviders } from '@angular/core';
import { OwnerHomeComponent } from './components/owner/owner-home/owner-home.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { CafeNewComponent } from './components/cafe/cafe-new/cafe-new.component';
import { CafeListComponent } from './components/cafe/cafe-list/cafe-list.component';
import { CafeProfileComponent } from './components/cafe/cafe-profile/cafe-profile.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import {AdminProfileComponent} from './components/admin/admin-profile/admin-profile.component';
import {CafeEditComponent} from './components/cafe/cafe-edit/cafe-edit.component';
import {MenuNewComponent} from './components/cafe/menu-new/menu-new.component';
import {CafeViewComponent} from './components/cafe/cafe-view/cafe-view.component';
import {CutomerHomeComponent} from './components/customer/cutomer-home/cutomer-home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:userId/profile', component: ProfileComponent},
  {path: 'owner/:ownerId', component: OwnerHomeComponent},
  {path: 'owner/:ownerId/profile', component: OwnerProfileComponent},
  {path: 'admin/:adminId', component: AdminHomeComponent},
  {path: 'owner/:ownerId/cafe/new', component: CafeNewComponent},
  {path: 'owner/:ownerId/cafe-list', component: CafeListComponent},
  {path: 'owner/:ownerId/:cafeId/edit', component: CafeEditComponent},
  {path: 'admin/:adminId/users', component: UserListComponent},
  {path: 'admin/:adminId/profile', component: AdminProfileComponent},
  {path: 'owner/cafe/:place_id', component: CafeProfileComponent},
  {path: 'owner/:ownerId/cafe-profile/:cafeId/menu', component: MenuNewComponent},
  {path: 'owner/:ownerId/cafe-profile/:cafeId', component: CafeViewComponent},
  {path: 'user/:userId', component: CutomerHomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
