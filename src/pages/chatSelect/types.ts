import Chats from '../../modules/chats';
import SystemMessage from './components/systemMessage';
import { BlockProps } from '../../types';

export interface IChatSelect extends BlockProps {
  chats: Chats;
  content: SystemMessage;
}
