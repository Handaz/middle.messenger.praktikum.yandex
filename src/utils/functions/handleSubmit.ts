import getFormValues from './getFormValues';
import validateForm from './validateForm';
import { ValidationSchema } from '../../types';
import Input from '../../components/form/input';

export default function handleSubmit({
  fields,
  e,
  validationSchema,
}: {
  fields: Input[];
  e: SubmitEvent;
  validationSchema?: ValidationSchema;
}) {
  e.preventDefault();

  const formValues = getFormValues(e.target);

  if (validationSchema) {
    validateForm(fields, formValues, validationSchema);
  }

  console.log(formValues);
}
