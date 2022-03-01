import { BlockProps } from '../../../../types';
import Button from '../../../../components/button';
import Avatar from '../../../../components/avatar';
import Modal from '../../../../components/modal';

export interface IConversationInfo extends BlockProps {
  avatar: Avatar;
  title: string;
  button: Button;
  modal: Modal;
}

export interface IAddMember {
  login: string;
}
