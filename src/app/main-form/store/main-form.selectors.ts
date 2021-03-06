import { DecoratorsSelectors } from 'src/app/shared/decorators/decorators.selectors';
import { mainFormComponentNamespace } from '../constants/main-form-properties.constant';

const value = DecoratorsSelectors.createValueSelector(mainFormComponentNamespace, 'test');
const formValue = DecoratorsSelectors.createFormValueSelector(mainFormComponentNamespace);

export const MainFormSelectors = {
  value,
  formValue,
};
