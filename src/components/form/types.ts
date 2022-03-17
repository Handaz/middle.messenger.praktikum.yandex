import { BlockProps } from '../../types';
import Button from '../button';
import Input from './input';
import Error from './error';
import FileInput from './fileInput';
import Label from './label';

export interface IFields {
  input: Input | FileInput;
  error?: Error;
  label?: Label;
}

export interface IForm extends BlockProps {
  vertical?: boolean;
  fields: IFields[];
  button: Button;
  profile?: boolean;
}
