import Avatar from '../../../../components/avatar';
import Link from '../../../../components/link';
import { BlockProps } from '../../../../types';

export interface IChat extends BlockProps {
  avatar: Avatar;
  title: Link;
  sender: string;
  message: string;
  time: string;
}
