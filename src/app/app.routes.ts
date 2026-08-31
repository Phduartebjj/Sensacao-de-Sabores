import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './features/product-details/product-details';
import { HomeComponent } from './features/home/home';

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
    }
];
