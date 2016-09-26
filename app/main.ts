/*
*  main.ts는 Angular의 최초 진입지점
*  webpack.config.js OR webpack.common.config.js 의 module.export{entry : ~}에서 지정하는 듯함(어떤 파일인지 명확하지 않음)
*
* */

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }         from './app.component';
import { appRouterProviders }   from './app.routes';

// 여기에 있는 AppComponent가 root component
bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);