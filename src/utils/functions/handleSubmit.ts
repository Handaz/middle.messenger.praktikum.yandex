import getFormValues from './getFormValues';
import validateForm from './validateForm';
import { ValidationSchema } from '../../types';
import { IFields } from '../../components/form/types';

interface HandleSubmitProps {
  fields: IFields[];
  e: SubmitEvent;
  validationSchema?: ValidationSchema;
}

export default function handleSubmit({
  fields,
  e,
  validationSchema,
}: HandleSubmitProps) {
  e.preventDefault();

  const formValues = getFormValues(e.target);

  if (validationSchema) {
    validateForm(fields, formValues, validationSchema);
  }

  console.log(formValues);
}
