import { DecoratorsActions } from './decorators.actions';
import { featureNamespaceProperty } from './decorators.constants';
import { IStoreFeature } from './store-feature.interface';

function extractNamespace(context: IStoreFeature): string {
  return context[featureNamespaceProperty];
}

export function storeValue(target: IStoreFeature, propertyKey: string | symbol) {
  let innerValue: unknown = null;

  Object.defineProperty(target, propertyKey, {
    get: () => innerValue,
    set: function (value: unknown) {
      const self = this as IStoreFeature;
      const featureNamespace = extractNamespace(self);

      innerValue = value;

      self.store.dispatch(DecoratorsActions.set({ key: propertyKey, namespace: featureNamespace, value }));
    },
  });
}
