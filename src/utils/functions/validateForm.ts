import { FormValues, ValidationSchema } from '../../types';
import { IFields } from '../../components/form/types';
import getCurField from './getCurField';

export default function validateForm(
  fields: IFields[],
  formValues: FormValues,
  validationSchema: ValidationSchema,
) {
  Object.entries(formValues).forEach(([name, value]) => {
    if (!validationSchema[name]) {
      return;
    }

    const field = getCurField(name, fields);

    if (!field) {
      return;
    }

    const { rule, error } = validationSchema[name];

    if (rule instanceof RegExp) {
      rule.lastIndex = 0;
      if (!rule.test(value)) {
        field.input.setProps({ error });
        field.error?.setProps({ error });
      } else {
        field.input.setProps({ error: undefined });
        field.error?.setProps({ error: undefined });
      }
    } else {
      const matchField = rule.equal;
      if (formValues[matchField] !== value) {
        field.input.setProps({ error });
        field.error?.setProps({ error });
      } else {
        field.input.setProps({ error: undefined });
        field.error?.setProps({ error: undefined });
      }
    }
  });
}
