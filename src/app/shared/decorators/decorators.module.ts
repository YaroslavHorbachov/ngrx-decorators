import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureKey, reducer } from './decorators.reducer';

@NgModule({
  imports: [StoreModule.forFeature(featureKey, reducer)],
})
export class DecoratorsModule {}
