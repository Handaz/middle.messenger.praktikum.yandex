import getFormValues from './getFormValues';
import validateForm from './validateForm';
import { ValidationSchema } from '../../types';
import Input from '../../components/form/input';
import Error from '../../components/form/error';

export default function handleSubmit({
  fields,
  e,
  validationSchema,
}: {
  fields: { input: Input; error?: Error }[];
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
