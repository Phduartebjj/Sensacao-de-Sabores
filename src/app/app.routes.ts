import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produto/:id',
    component: ProductDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
