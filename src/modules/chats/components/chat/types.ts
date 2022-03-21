import Avatar from '../../../../components/avatar';
import { BlockProps } from '../../../../types';

export interface IChat extends BlockProps {
  avatar: Avatar;
  title: string;
  sender: string;
  message: string;
  time: string;
  unread: string | number;
  selected?: boolean;
}
