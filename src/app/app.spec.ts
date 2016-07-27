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

  it('should create the app component',
    inject([App], (component: App) => {
      expect(component).toBeTruthy();
    }));
});
