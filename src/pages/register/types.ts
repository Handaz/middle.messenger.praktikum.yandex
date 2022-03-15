import ContentBlock from '../../components/contentBlock';
import { BlockProps } from '../../types';

export interface IRegister extends BlockProps {
  form: ContentBlock;
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

export interface RegisterData {
  id: string;
}
