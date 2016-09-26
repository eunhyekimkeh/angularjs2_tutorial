import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';
@Component({
    selector: 'my-app', /* index.html에서 my-app의 영역 지정*/
    template: `
    <h1>{{title}}</h1>
    <nav>
    <a [routerLink]="['/dashboard']" routerLinkActive="active"> Dashboard</a>
    <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';

    constructor() {
        console.log('AppComponent 생성');
    }
}
