import Input from '../../components/form/input';
import FormError from '../../components/form/error';
import FileInput from '../../components/form/fileInput';
import { ValidationSchema } from '../../types';
import { IFields } from '../../components/form/types';
import getCurField from './getCurField';

export default function validateField(
  input: Input | FileInput,
  formError: FormError,
  validationSchema: ValidationSchema,
  fields?: IFields[],
) {
  const { value, name } = input.element as HTMLInputElement;

  if (!validationSchema[name]) {
    return;
  }

  const { rule, error } = validationSchema[name];

  if (rule instanceof RegExp) {
    rule.lastIndex = 0;
    if (!rule.test(value)) {
      input.setProps({ error });
      formError.setProps({ error });
    } else {
      input.setProps({ error: undefined });
      formError.setProps({ error: undefined });
    }
  } else {
    if (!fields) {
      return;
    }
    const matchField = rule.equal;
    const field = getCurField(matchField, fields);

    if (!field || !field.input.element) {
      return;
    }

    const requiredVal = (field.input.element as HTMLInputElement).value;

    if (requiredVal !== value) {
      input.setProps({ error });
      formError.setProps({ error });
    } else {
      input.setProps({ error: undefined });
      formError.setProps({ error: undefined });
    }
  }
}
