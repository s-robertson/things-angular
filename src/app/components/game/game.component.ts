import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GameService } from './service/game.service';

@Component({
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  providers: [GameService]
})
export class GameComponent {}
