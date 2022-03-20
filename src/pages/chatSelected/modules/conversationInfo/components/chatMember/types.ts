import Avatar from '../../../../../../components/avatar';
import Button from '../../../../../../components/button';
import { BlockProps } from '../../../../../../types';

export interface IChatMember extends BlockProps {
  username: string;
  avatar: Avatar;
  button: Button | string;
  adding?: boolean;
  inChat?: boolean;
}
