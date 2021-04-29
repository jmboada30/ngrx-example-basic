import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/counter.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  counter: number = 0;

  constructor(private store: Store<AppState>) {
    this.store.select('count').subscribe((count) => (this.counter = count));
  }

  increase() {
    this.store.dispatch(actions.increment());
  }

  decrement() {
    this.store.dispatch(actions.decrement());
  }
}
