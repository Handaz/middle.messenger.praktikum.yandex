import getFormValues from './getFormValues';
import validateForm from './validateForm';
import { FormValues, ValidationSchema } from '../../types';
import { IFields } from '../../components/form/types';

interface HandleSubmitProps {
  fields: IFields[];
  e: SubmitEvent;
  validationSchema?: ValidationSchema;
}

export default function handleSubmit<T extends FormValues>({
  fields,
  e,
  validationSchema,
}: HandleSubmitProps) {
  e.preventDefault();

  const data = getFormValues<T>(e.target);

  return {
    data,
    isValid: validationSchema
      ? validateForm(fields, data, validationSchema)
      : true,
  };
}
