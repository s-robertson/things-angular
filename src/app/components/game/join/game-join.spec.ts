import {
  inject,
  addProviders
} from '@angular/core/testing';
import { GameService } from '../service/game.service';
import { ActivatedRoute } from '@angular/router';
import { GameJoinComponent } from './game-join.component';

class MockGameService {}
class MockActivatedRoute {}

// Load the implementations that should be tested
describe('GameJoinComponent: Testing', () => {
  beforeEach(() => {
    addProviders(
      [
        { provide: GameService, useClass: MockGameService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        GameJoinComponent
      ]
    );
  });

  it('should create the game join component',
    inject([GameJoinComponent], (component: GameJoinComponent) => {
      expect(component).toBeTruthy();
    }));
});
