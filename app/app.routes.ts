import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

const routes: RouterConfig = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    { /* 기본 주소 */
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },
    {
        path: 'detail/:id',
        component:HeroDetailComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];

/* RouterConfig의 속성
*
 path is a string that uses the route matcher DSL. 앞에 슬래시쓰면 안됨
 component is a component type.

 pathMatch is a string that specifies the matching strategy.
 redirectTo is the url fragment which will replace the current matched segment.
 outlet is the name of the outlet the component should be placed into.
 canActivate is an array of DI tokens used to look up CanActivate handlers. See CanActivate for more info.
 canDeactivate is an array of DI tokens used to look up CanDeactivate handlers. See CanDeactivate for more info.
 data is additional data provided to the component via ActivatedRoute.
 resolve is a map of DI tokens used to look up data resolvers. See Resolve for more info.
 children is an array of child route definitions.

* */
