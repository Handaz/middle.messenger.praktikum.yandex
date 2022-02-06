import { BlockProps } from '../../types';
import Button from '../button';
import Input from './input';
import Error from './error';

export interface IFields {
  input: Input;
  error?: Error;
}

export interface IForm extends BlockProps {
  vertical?: boolean;
  fields: IFields[];
  button: Button;
}
