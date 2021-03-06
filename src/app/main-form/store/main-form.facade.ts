import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainFormSelectors } from './main-form.selectors';

@Injectable({ providedIn: 'root' })
export class MainFormFacade {
  constructor(private readonly _store: Store) {}

  public readonly value$ = this._store.select(MainFormSelectors.value);

  public readonly formValue$ = this._store.select(MainFormSelectors.formValue);
}
