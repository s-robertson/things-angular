import { Component } from '@angular/core';
import { RegisterFormComponent } from './register-form.component';

@Component({
  selector: 'register',
  template: '<register-form></register-form>',
  directives: [RegisterFormComponent]
})
export class RegisterComponent {}
