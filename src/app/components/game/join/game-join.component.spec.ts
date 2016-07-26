import { addProviders, inject } from '@angular/core/testing';
import { GameJoinComponent } from './game-join.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Game } from '../../../models/game';
import { GameService } from '../service/game.service';

class MockRouter {}

class MockGameService {
  get(code: string): Promise<Game> {
    return new Promise<Game>((resolve, reject) => {
      resolve(new Game(code, 1));
    });
  }
}
class MockActivatedRoute {
  public params: Observable<Object>;

  constructor() {
    this.params = Observable.create(observer => {
      observer.onNext({
        code: '12345'
      });
      observer.onCompleted();
    });
  }
}

describe('GameJoinComponent: Testing', () => {
  beforeEach(() => {
    addProviders(
      [
        { provide: Router, useClass: MockRouter },
        { provide: GameService, useClass: MockGameService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        GameJoinComponent
      ]
    );
  });

  it('should create the join game component',
    inject([GameJoinComponent], (component: GameJoinComponent) => {
      expect(component).toBeTruthy();
    }));
});
