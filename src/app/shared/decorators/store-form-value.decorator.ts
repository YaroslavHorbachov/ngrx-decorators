import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { isObservable, merge, Observable, of, Subscription } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { DecoratorsActions } from './decorators.actions';
import { featureFormProperty, featureNamespaceProperty } from './decorators.constants';
import { IStoreFeature } from './store-feature.interface';

function extractNamespace(context: IStoreFeature): string {
  return context[featureNamespaceProperty];
}

export function storeFormValue(target: IStoreFeature & OnDestroy, propertyKey: string | symbol) {
  const subscription = new Subscription();
  const originalOnDestroy = target.ngOnDestroy;

  let innerValue: FormGroup | null = null;

  function wrappedOnDestroy() {
    originalOnDestroy();

    subscription.unsubscribe();
  }

  target.ngOnDestroy = wrappedOnDestroy;

  Object.defineProperty(target, propertyKey, {
    get: () => innerValue,
    set: function (value) {
      const self = this as IStoreFeature;

      innerValue = value;

      const form = self[propertyKey] as FormGroup;
      const featureNamespace = extractNamespace(self);
      const form$ = isObservable(form) ? (form as Observable<FormGroup>) : of(form);
      const initFormValue$ = form$.pipe(
        map((form) => form.value),
        first()
      );
      const formValueChanges$ = form$.pipe(switchMap((form) => form.valueChanges));
      const subscription$ = merge(formValueChanges$, initFormValue$).subscribe((formValue) => {
        self.store.dispatch(DecoratorsActions.set({ key: featureFormProperty, namespace: featureNamespace, value: formValue }));
      });

      subscription$.add(subscription$);
    },
  });
}
