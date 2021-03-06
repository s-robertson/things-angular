import {
  inject,
  addProviders
} from '@angular/core/testing';

// Load the implementations that should be tested
import { Home } from './home.component';

describe('Home', () => {
  beforeEach(() => {
    addProviders(
      [
        Home
      ]
    );
  });

  it('should create the home component',
    inject([Home], (component: Home) => {
      expect(component).toBeTruthy();
    }));
});
