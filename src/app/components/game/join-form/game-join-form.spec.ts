import { addProviders, inject } from '@angular/core/testing';
import { GameJoinFormComponent } from './game-join-form.component';
import { Router } from '@angular/router';

class MockRouter {}

describe('GameJoinFormComponent: Testing', () => {
  beforeEach(() => {
    addProviders(
      [
        { provide: Router, useClass: MockRouter },
        GameJoinFormComponent
      ]
    );
  });

  it('should create the join game form component',
    inject([GameJoinFormComponent], (component: GameJoinFormComponent) => {
      expect(component).toBeTruthy();
    }));
});
