import {
  addProviders,
  inject,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './app.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([ App ]);
  });

  /*it('should have state', inject([ App ], (app) => {
    expect(app.appState).toBeDefined();
  }));*/

});
