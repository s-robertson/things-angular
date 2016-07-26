import { addProviders, inject } from '@angular/core/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent: Testing', () => {
  beforeEach(() => {
    addProviders(
      [
        RegisterComponent
      ]
    );
  });

  it('should create the register component',
    inject([RegisterComponent], (component: RegisterComponent) => {
      expect(component).toBeTruthy();
    }));
});
