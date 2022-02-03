import Input from '../../components/form/input';
import Profile from './components/profile';
import Chat from './components/chat';
import { BlockProps } from '../../types';

export interface IChats extends BlockProps {
  profile: Profile;
  search: Input;
  chatList: Chat[];
}
