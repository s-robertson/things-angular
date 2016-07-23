import { GameJoinComponent } from './game-join.component';
import {TestComponentBuilder,
  addProviders,
  inject,
  async,
  ComponentFixture} from '@angular/core/testing';
import { Router } from '@angular/router';

class MockRouter {}

describe('join game component', () => {
  let builder;

  beforeEach(() => {
    addProviders([
      { provide: Router, useClass: MockRouter }
    ]);
  });

  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  }));

  // @TODO: come back to this once async tests work better
  /*it('should render join game form', async(() => {
    builder.createAsync(GameJoinComponent)
      .then((fixture: ComponentFixture<GameJoinComponent>) => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('input[name="gameCode"]').length).toBeGreaterThan(0);
      });
  }));*/
});
