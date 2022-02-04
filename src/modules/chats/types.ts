import { BlockProps } from '../../types';
import Input from '../../components/form/input';
import Chat from './components/chat';
import Link from '../../components/link';

export interface IChats extends BlockProps {
  profile: Link;
  search: Input;
  chatList: Chat[];
}
