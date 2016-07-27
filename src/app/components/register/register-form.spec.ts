import { addProviders, inject } from '@angular/core/testing';
import { RegisterFormComponent } from './register-form.component';
import { UserService } from '../../services/user.service';

class MockUserService {}

describe('RegisterFormComponent: Testing', () => {
  beforeEach(() => {
    addProviders(
      [
        { provide: UserService, useClass: MockUserService },
        RegisterFormComponent
      ]
    );
  });

  it('should create the register form component',
    inject([RegisterFormComponent], (component: RegisterFormComponent) => {
      expect(component).toBeTruthy();
    }));
});
