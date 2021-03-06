import { RouterConfig } from '@angular/router';
import { Home } from './components/home';
import { NoContent } from './components/no-content';
import { Login } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { gameRoutes } from './components/game/game.routes';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent },
  ...gameRoutes,
  { path: '**',    component: NoContent }
];
