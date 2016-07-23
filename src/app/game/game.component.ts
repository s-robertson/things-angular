import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  providers: [GameService]
})
export class GameComponent {}
