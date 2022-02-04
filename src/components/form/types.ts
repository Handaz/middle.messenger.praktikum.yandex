import { BlockProps } from '../../types';
import Button from '../button';
import Input from './input';

export interface IForm extends BlockProps {
  vertical?: boolean;
  fields: Input[];
  button: Button;
}
