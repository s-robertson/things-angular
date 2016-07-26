import {
  inject,
  addProviders
} from '@angular/core/testing';
import { GameComponent } from './game.component';

// Load the implementations that should be tested
describe('GameComponent: Testing', () => {
  beforeEach(() => {
    addProviders(
      [
        GameComponent
      ]
    );
  });

  it('should create the game component',
    inject([GameComponent], (component: GameComponent) => {
      expect(component).toBeTruthy();
    }));
});
