import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './home/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
    
      // Add this route:
      {
        path: 'login',
        loadComponent: () =>
          loadRemoteModule('login', './Component').then((m) => m.AppComponent),
      },

      {
        path: '**',
        component: NotFoundComponent,
      },
    
];
