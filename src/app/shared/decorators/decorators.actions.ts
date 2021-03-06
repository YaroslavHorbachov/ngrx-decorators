import { createAction, props } from '@ngrx/store';

const set = createAction('SET', props<{ key: symbol | string; value: unknown; namespace: string }>());

export const DecoratorsActions = { set };
