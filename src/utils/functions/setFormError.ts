import { IFields } from '../../components/form/types';

export default function setFormError(fields: IFields[], error: string) {
  fields.forEach((field) => {
    field.input.setProps({ error });
    field.error?.setProps({ error });
  });
}
