import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterOutlet } from '@angular/router';
import {
  PoLoadingModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { NgIf } from '@angular/common';
import { MenuComponent } from '../shared/components/menu/menu.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    PoToolbarModule,
    PoLoadingModule,
    MenuComponent,
    LoadingComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isLoading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(
      (event): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.isLoading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.isLoading  = false;
        }
      }
    );
  }
}
