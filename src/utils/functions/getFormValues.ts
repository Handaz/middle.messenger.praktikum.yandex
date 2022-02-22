import { FormValues } from '../../types';

export default function getFormValues<T extends FormValues>(
  eventTarget: EventTarget | null,
): T {
  const form = eventTarget as HTMLElement;

  const nodeList = form.querySelectorAll('input');

  if (nodeList.length === 0) {
    throw Error('No input fields were found');
  }

  const inputFields = Array.from(nodeList);

  return Object.fromEntries(
    inputFields.map(({ name, value }) => [name, value]),
  ) as T;

  // const formValues = {};

  // inputFields.forEach((input) => {
  //   formValues[input.name] = input.value;
  // });

  // return formValues;
}
