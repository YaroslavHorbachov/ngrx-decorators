import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly _store: Store) {
    this._store.subscribe(console.log);
  }

  isToggled = true;

  onToggle() {
    this.isToggled = !this.isToggled;
  }
}
