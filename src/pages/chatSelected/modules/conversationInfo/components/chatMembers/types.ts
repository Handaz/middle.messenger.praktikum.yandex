import ChatMember from '../chatMember';
import Button from '../../../../../../components/button';
import { BlockProps } from '../../../../../../types';

export interface IChatMembers extends BlockProps {
  button: Button;
  members: ChatMember[];
}
