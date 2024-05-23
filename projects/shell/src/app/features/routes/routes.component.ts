import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [
    PoPageModule
  ],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent {

  constructor() { }
}
