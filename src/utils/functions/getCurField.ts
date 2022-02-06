import { IFields } from '../../components/form/types';

export default function getCurField(name: string, fields: IFields[]) {
  return fields.find(({ input: { element } }) => {
    if (!element) {
      return false;
    }

    return (element as HTMLInputElement).name === name;
  });
}
