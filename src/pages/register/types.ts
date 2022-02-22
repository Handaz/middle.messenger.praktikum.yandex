import { BlockProps } from '../../types';
import ContentBlock from '../../components/contentBlock';
import Link from '../../components/link';

export interface IRegister extends BlockProps {
  form: ContentBlock;
  link: Link;
}

export type RegisterForm = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
  passwordConfirm?: string;
};
