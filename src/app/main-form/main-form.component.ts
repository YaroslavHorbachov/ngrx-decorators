import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { IStoreFeature, storeFeature, storeFormValue } from '../shared/decorators';
import { storeValue } from '../shared/decorators/store-value.decorator';
import { mainFormComponentNamespace } from './constants/main-form-properties.constant';
import { MainFormFacade } from './store';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
})
@storeFeature(mainFormComponentNamespace)
export class MainFormComponent implements OnInit, IStoreFeature, OnDestroy {
  constructor(public readonly store: Store, private readonly _formBuilder: FormBuilder, private readonly _mainFormFacade: MainFormFacade) {}

  @storeFormValue
  public readonly form$ = of(
    this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', [Validators.min(5), Validators.max(50)]],
      email: ['', [Validators.email]],
    })
  );

  @storeValue
  public test = 'TestV';

  public readonly value$ = this._mainFormFacade.value$;

  public readonly formValue$ = this._mainFormFacade.formValue$;

  ngOnInit(): void {
    this.test = 'New Test';
  }

  public ngOnDestroy(): void {}
}
