import { BlockProps } from '../../../../types';
import Button from '../../../../components/button';
import Avatar from '../../../../components/avatar';
import Modal from '../../../../components/modal';

export interface IConversationInfo extends BlockProps {
  avatar: Avatar;
  username: string;
  button: Button;
  modal: Modal;
}
