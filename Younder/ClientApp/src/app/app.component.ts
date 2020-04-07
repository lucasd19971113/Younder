import { Component } from '@angular/core';
import { hammerjs } from '../../node_modules/hammerjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  hammerjs = hammerjs;
  title = 'app';
}
