import { featureNamespaceProperty } from './decorators.constants';

export function storeFeature(namespace: symbol) {
  return (constructor: Function) => {
    constructor.prototype[featureNamespaceProperty] = namespace;
  };
}
