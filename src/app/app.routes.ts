import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { NoContent } from './no-content';
import { Login } from './components/login/login';
import { Register } from './components/register/register.component';

import { DataResolver } from './app.resolver';
import {AuthGuard} from './services/authguard.service';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  // make sure you match the component type string to the require in asyncRoutes
  { path: 'about', component: 'About',
    canActivate: [AuthGuard],
    resolve: {
      'yourData': DataResolver
    }},
  // async components with children routes must use WebpackAsyncRoute
  { path: 'detail', component: 'Detail',
    canActivate: [ WebpackAsyncRoute ],
    children: [
      { path: '', component: 'Index' }  // must be included
    ]},
  { path: '**',    component: NoContent },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'About': require('es6-promise-loader!./about'),
  'Detail': require('es6-promise-loader!./+detail'),
  'Index': require('es6-promise-loader!./+detail'), // must be exported with detail/index.ts
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['About'],
  asyncRoutes['Detail'],
   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
