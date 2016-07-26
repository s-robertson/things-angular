/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { provideRouter } from '@angular/router';
// Angular 2 forms
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { SocketService, RestService } from '../app/services/feathers.service';
import { AuthService } from '../app/services/auth.service';
import { AuthGuard } from '../app/services/authguard.service';

// AngularClass
import { provideWebpack } from '@angularclass/webpack-toolkit';
import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


import { routes, asyncRoutes, prefetchRouteCallbacks } from '../app/app.routes';

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  // new Angular 2 forms
  disableDeprecatedForms(),
  provideForms(),
  AuthGuard,

  provideRouter(routes),
  provideWebpack(asyncRoutes),
  providePrefetchIdleCallbacks(prefetchRouteCallbacks),

  ...HTTP_PROVIDERS,

  { provide: LocationStrategy, useClass: PathLocationStrategy },
  SocketService,
  RestService,
  AuthService
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
