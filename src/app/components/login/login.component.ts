import { Component } from '@angular/core';
import { RestService } from '../../services/feathers.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.template.html'
})
export class Login {
  private email: string;
  private password: string;
  private message: string;

  constructor(private restService: RestService, private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.authenticate(this.email, this.password)
      .then(() => {

      })
      .catch(err => {
        console.log(err);
        this.message = err.message;
      })
  }

  ngOnInit() {
    // Redirect if we're already logged in.
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/home');
    }
  }
}
