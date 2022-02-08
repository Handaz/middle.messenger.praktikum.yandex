import Avatar from '../../../../components/avatar';
import Link from '../../../../components/link';
import { BlockProps } from '../../../../types';

export interface IChat extends BlockProps {
  avatar: Avatar;
  username: Link;
  sender: string;
  message: string;
  time: string;
}
