import { BlockProps } from '../../types';
import Avatar from '../../components/avatar';
import Form from '../../components/form';

export interface IProfileForm extends BlockProps {
  avatar: Avatar;
  form: Form;
}
