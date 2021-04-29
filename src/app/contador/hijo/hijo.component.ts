import { Component, OnInit } from '@angular/core';
import * as actions from '../../contador/counter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  counter: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('count').subscribe((count) => (this.counter = count));
  }

  multiply() {
    this.store.dispatch(actions.multiply({ number: 3 }));
  }
  divide() {
    this.store.dispatch(actions.divide({ number: 3 }));
  }
}
