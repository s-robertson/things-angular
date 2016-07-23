import { RouterConfig } from "@angular/router";
import { GameComponent } from "./game.component";
import { GamePlayComponent } from './game-play.component';
import { GameJoinFormComponent } from './join-form/game-join-form.component';
import { GameNewComponent } from './game-new.component';
import {GameJoinComponent} from "./join/game-join.component";

export const gameRoutes: RouterConfig = [
  {
    path: 'game',
    component: GameComponent,
    children: [
      { path: 'join', component: GameJoinFormComponent },
      { path: 'join/:code', component: GameJoinComponent },
      { path: 'new', component: GameNewComponent },
      { path: ':code', component: GamePlayComponent }
    ],
  }
];
