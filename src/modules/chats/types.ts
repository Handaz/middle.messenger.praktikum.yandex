import { BlockProps } from '../../types';
import Input from '../../components/form/input';
import Chat from './components/chat';
import Link from '../../components/link';
import Button from '../../components/button';
import Modal from '../../components/modal';

export interface IChats extends BlockProps {
  profile: Link;
  search: Input;
  chatAdd: Button;
  modal: Modal;
  chatList?: Chat[];
  loadChats: Button;
}
