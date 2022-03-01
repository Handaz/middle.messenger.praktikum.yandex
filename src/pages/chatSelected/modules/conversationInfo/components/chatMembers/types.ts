import ChatMember from '../chatMember';
import Form from '../../../../../../components/form';
import { BlockProps } from '../../../../../../types';

export interface IChatMembers extends BlockProps {
  form: Form;
  members: ChatMember[];
}
