import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.template.html'
})
export class Home {
  // Set our default values
  // TypeScript public modifiers
  constructor() {}

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
