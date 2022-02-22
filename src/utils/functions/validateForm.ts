import { FormValues, ValidationSchema } from '../../types';
import { IFields } from '../../components/form/types';
import getCurField from './getCurField';

export default function validateForm(
  fields: IFields[],
  formValues: FormValues,
  validationSchema: ValidationSchema,
) {
  let isValid = true;

  Object.entries(formValues).forEach(([name, value]) => {
    if (!validationSchema[name]) {
      isValid = false;
      return;
    }

    const field = getCurField(name, fields);

    if (!field) {
      isValid = false;
      return;
    }
    const { rule, error } = validationSchema[name];

    if (rule instanceof RegExp) {
      rule.lastIndex = 0;
      if (!rule.test(value)) {
        field.input.setProps({ error });
        field.error?.setProps({ error });
        isValid = false;
      } else {
        field.input.setProps({ error: undefined });
        field.error?.setProps({ error: undefined });
      }
    } else {
      const matchField = rule.equal;
      if (formValues[matchField] !== value) {
        field.input.setProps({ error });
        field.error?.setProps({ error });
        isValid = false;
      } else {
        field.input.setProps({ error: undefined });
        field.error?.setProps({ error: undefined });
      }
    }
  });

  return isValid;
}
