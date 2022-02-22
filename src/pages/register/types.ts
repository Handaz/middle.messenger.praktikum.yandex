import { BlockProps } from '../../types';
import ContentBlock from '../../components/contentBlock';
import Link from '../../components/link';
import { IFields } from '../../components/form/types';

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

export interface RegisterProps {
  fields: IFields[];
  e: SubmitEvent;
}

export interface RegisterData {
  id: string;
}
