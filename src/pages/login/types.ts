import Form from '../../components/form';
import Link from '../../components/link';
import { BlockProps } from '../../types';

export interface ILogin extends BlockProps {
  form: Form;
  link: Link;
}
