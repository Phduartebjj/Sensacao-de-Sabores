import { Routes } from '@angular/router';

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
