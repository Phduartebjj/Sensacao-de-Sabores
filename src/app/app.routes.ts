import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'produto/:id', component: HomeComponent },
  {
    path: '**',
    redirectTo: '',
  },
];
