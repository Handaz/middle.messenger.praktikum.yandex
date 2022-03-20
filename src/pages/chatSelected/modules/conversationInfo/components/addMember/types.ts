import Button from '../../../../../../components/button';
import Form from '../../../../../../components/form';
import ChatMember from '../chatMember';
import { BlockProps } from '../../../../../../types';

export interface IAddMember extends BlockProps {
  button: Button;
  form: Form;
  users?: ChatMember[];
}
