import { addProviders, inject } from '@angular/core/testing';
import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent: Testing', () => {
  beforeEach(() => {
    addProviders(
      [
        RegisterFormComponent
      ]
    );
  });

  it('should create the register form component',
    inject([RegisterFormComponent], (component: RegisterFormComponent) => {
      expect(component).toBeTruthy();
    }));
});
