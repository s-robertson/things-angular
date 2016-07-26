import { addProviders, inject } from '@angular/core/testing';
import { Login } from './login.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

class MockAuthService {}
class MockRouter {}

describe('LoginComponent: Testing', () => {
  beforeEach(() => {
    addProviders(
      [
        { provide: Router, useClass: MockRouter },
        { provide: AuthService, useClass: MockAuthService },
        Login
      ]
    );
  });

  it('should create the login form component',
    inject([Login], (component: Login) => {
      expect(component).toBeTruthy();
    }));
});
