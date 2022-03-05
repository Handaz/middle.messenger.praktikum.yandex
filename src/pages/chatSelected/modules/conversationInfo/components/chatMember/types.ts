import Button from '../../../../../../components/button';
import { BlockProps } from '../../../../../../types';

export interface IChatMember extends BlockProps {
  username: string;
  button: Button | string;
}
