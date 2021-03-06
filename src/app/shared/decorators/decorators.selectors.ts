import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureFormProperty } from './decorators.constants';
import { featureKey } from './decorators.reducer';
const featureSelector = createFeatureSelector(featureKey);

const createNamespaceSelector = (namespace: symbol) => {
  return createSelector(featureSelector, (state) => state[namespace]);
};

function createValueSelector(namespace: symbol, key: string) {
  const namespaceSelector = createNamespaceSelector(namespace);

  return createSelector(namespaceSelector, (namespace) => {
    return namespace ? namespace[key] : null;
  });
}

function createFormValueSelector(namespace: symbol) {
  const namespaceSelector = createNamespaceSelector(namespace);

  return createSelector(namespaceSelector, (namespace) => {
    return namespace ? namespace[featureFormProperty] : null;
  });
}

export const DecoratorsSelectors = { createValueSelector, createFormValueSelector };
