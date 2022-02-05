import Input from '../../components/form/input';
import { FormValues, ValidationSchema } from '../../types';

export default function validateForm(
  fields: Input[],
  formValues: FormValues,
  validationSchema: ValidationSchema,
) {
  Object.entries(formValues).forEach(([name, value]) => {
    if (!validationSchema[name]) {
      return;
    }

    const { rule, error } = validationSchema[name];

    if (rule instanceof RegExp) {
      if (!rule.test(value)) {
        const errorInput = fields.find(({ element }) => {
          if (!element) {
            return false;
          }
          const input = element.querySelector('input');

          return input!.name === name;
        });

        errorInput?.setProps({ error });
      }
    } else {
      const matchField = rule.equal;

      const errorInput = fields.find(({ element }) => {
        if (!element) {
          return false;
        }
        const input = element.querySelector('input');

        return input!.name === name;
      });

      if (formValues[matchField] !== value) {
        errorInput?.setProps({ error });
      }
    }
  });
}
