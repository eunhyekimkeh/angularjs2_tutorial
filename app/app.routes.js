"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require("./dashboard.component");
var hero_detail_component_1 = require("./hero-detail.component");
var routes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
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
//# sourceMappingURL=app.routes.js.map