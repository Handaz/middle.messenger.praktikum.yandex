import { IFields } from '../../components/form/types';

export interface FormControllerProps {
  fields: IFields[];
  e: SubmitEvent;
}

export class Controller<T = unknown> {
  data: T;
}
