import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {CafeEditComponent} from './components/cafe/cafe-edit/cafe-edit.component';
import {CafeNewComponent} from './components/cafe/cafe-new/cafe-new.component';
import {CafeListComponent} from './components/cafe/cafe-list/cafe-list.component';
import {CafeViewComponent} from './components/cafe/cafe-view/cafe-view.component';

const APP_ROUTES: Routes = [
    { path: 'user/:userId/cafe/new', component : CafeNewComponent},
    { path : 'user/:userId/cafe/:cafeId' , component: CafeEditComponent},
    { path : 'user/:userId/cafes' , component: CafeListComponent},
    { path : 'user/:userId/cafe/view/:cafeId' , component: CafeViewComponent}
    // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
