import { IFields } from '../components/form/types';

export interface FormControllerProps {
  fields: IFields[];
  e: SubmitEvent;
}
