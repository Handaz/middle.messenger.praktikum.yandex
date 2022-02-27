import { FormValues, ValidationSchema } from '../../types';
import { IFields } from '../../components/form/types';
import getCurField from './getCurField';

const setErrors = (field: IFields, error: string) => {
  field.input.setProps({ error });
  field.error?.setProps({ error });
  return false;
};

const removeErrors = (field: IFields) => {
  field.input.setProps({ error: undefined });
  field.error?.setProps({ error: undefined });
};

export default function validateForm(
  fields: IFields[],
  formValues: FormValues,
  validationSchema: ValidationSchema,
) {
  let isValid = true;

  Object.entries(formValues).forEach(([name, value]) => {
    if (!validationSchema[name]) {
      isValid = false;
      throw new Error(`No validation rule for field ${name}`);
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
        isValid = setErrors(field, error);
      } else {
        removeErrors(field);
      }
    } else if (typeof rule === 'function') {
      if (!rule(value)) {
        isValid = setErrors(field, error);
      } else {
        removeErrors(field);
      }
    } else {
      const matchField = rule.equal;
      if (formValues[matchField] !== value) {
        isValid = setErrors(field, error);
      } else {
        removeErrors(field);
      }
    }
  });

  return isValid;
}
