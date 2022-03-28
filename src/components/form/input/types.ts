import { BlockProps } from '../../../types';

export interface IInput extends BlockProps {
  type: InputType;
  name: string;
  placeholder: string;
  error?: string;
  value?: string;
  opaque?: boolean;
  round?: boolean;
  noautocomplete?: boolean;
  profile?: boolean;
}

export type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
