import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent implements OnInit {
  counter = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('count').subscribe((count) => (this.counter = count));
  }

  reset() {
    this.store.dispatch(actions.reset());
  }
}
