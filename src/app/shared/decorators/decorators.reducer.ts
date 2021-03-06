import { Action, createReducer, on } from '@ngrx/store';
import { DecoratorsActions } from './decorators.actions';

interface IState {
  [namespace: string]: {
    [key: string]: unknown;
  };
}

const initialState: IState = {};

const decoratorsReducer = createReducer(
  initialState,

  on(DecoratorsActions.set, (state, { key, value, namespace }) => ({ ...state, [namespace]: { ...state[namespace], [key]: value } }))
);

export const featureKey = 'decorators';

export function reducer(state: IState, action: Action) {
  return decoratorsReducer(state, action);
}
