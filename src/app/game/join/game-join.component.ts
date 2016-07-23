import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './game-join.template.html'
})
export class GameJoinComponent {
  constructor(private router: Router){}

  gameCode:string = '';

  onSubmit() {
    this.router.navigate(['./game/join/' + this.gameCode]);
    return false;
  }
}
