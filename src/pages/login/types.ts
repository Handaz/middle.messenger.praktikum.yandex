import { BlockProps } from '../../types';
import ContentBlock from '../../components/contentBlock';

export interface ILogin extends BlockProps {
  form: ContentBlock;
}

export type LoginForm = {
  login: string;
  password: string;
};
