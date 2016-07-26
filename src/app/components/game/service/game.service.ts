import { RestService, SocketService } from '../../../services/feathers.service';
import { Injectable } from '@angular/core';
import { Game } from '../../../models/game';

@Injectable()
export class GameService {
  private _socket;
  private _rest;

  constructor(_socketService: SocketService, _restService: RestService) {
    this._socket = _socketService.getService('games');
    this._rest = _restService.getService('games');
  }

  create(game: any) {
    return this._rest.create(game).then(result => {
      console.log(result);
    }).catch(error => {
      console.error(error);
    });
  }

  get(code: string): Promise<Game> {
    // @TODO: make actual call to API
    return new Promise<Game>((resolve, reject) => {
      reject('no game');
      resolve(new Game('12345', 1));
    });
  }
}
