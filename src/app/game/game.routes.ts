import { RouterConfig } from "@angular/router";
import { GameComponent } from "./game.component";
import { GamePlayComponent } from './game-play.component';
import { GameJoinComponent } from './join/game-join.component';
import { GameNewComponent } from './game-new.component';

export const gameRoutes: RouterConfig = [
  {
    path: 'game',
    component: GameComponent,
    children: [
      { path: 'join', component: GameJoinComponent },
      { path: 'new', component: GameNewComponent },
      { path: ':id', component: GamePlayComponent }
    ],
  }
];
