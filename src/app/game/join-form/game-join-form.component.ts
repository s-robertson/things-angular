import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './game-join-form.template.html'
})
export class GameJoinFormComponent {
  constructor(private router: Router){}

  gameCode:string = '';

  onSubmit() {
    this.router.navigate(['./game/join/' + this.gameCode]);
    return false;
  }
}
