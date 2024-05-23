import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
      },
      {
        path: 'login',
        loadComponent: () =>
          loadRemoteModule('login', './Component').then((m) => m.AppComponent),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.routes').then(
            (m) => m.dashboardRoutes
          )
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
];
