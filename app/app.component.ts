// -*- mode:web -*-
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:  ['<button (click)="clicked()">Testing dummy</button>'].join('\n')
})
export class AppComponent {
  clicked() {
    console.log('Clicked?');
  }
}
