import { Component } from '@angular/core';
import { GameService } from '../service/game.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../../models/game';

@Component({
  templateUrl: './game-join.template.html'
})
export class GameJoinComponent {
  private sub: any;
  private game: Game;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let gameCode = params['code'];
      this.gameService.get(gameCode)
        .then((game: Game) => {
          this.game = game;
        })
        .catch(err => {
          this.game = null;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
