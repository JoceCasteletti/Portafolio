import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({transform: 'translateX(100%)', overflow: 'hidden'}),
            animate('1s ease-in-out', style({transform: 'translateX(0%)'}))
          ], {optional: true}),
          query(':leave', [
            style({transform: 'translateX(0%)', overflow: 'hidden'}),
            animate('1s ease-in-out', style({transform: 'translateX(-100%)'}))
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'portafolio-joce';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
