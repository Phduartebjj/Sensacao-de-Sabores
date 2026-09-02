import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './shared/components/footer/footer';

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
