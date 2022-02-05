import getFormValues from './getFormValues';
import validateForm from './validateForm';
import { ValidationSchema } from '../types';

export default function handleSubmit(
  e: SubmitEvent,
  validationSchema?: ValidationSchema,
) {
  e.preventDefault();

  const formValues = getFormValues(e.target);

  if (validationSchema) {
    validateForm(this, formValues, validationSchema);
  }

  console.log(formValues);
}
