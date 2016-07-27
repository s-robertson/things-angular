import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.html',
  providers: [ UserService ]
})
export class RegisterFormComponent {
  private user: User = new User();
  private errors: Array<string> = [];

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.create(this.user)
      .then(user => {
        // @TODO: Where to go once user is created?
      })
      .catch(err => {
        this.errors.push(err);
      });
  }
}
