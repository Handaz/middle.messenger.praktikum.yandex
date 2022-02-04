import Chats from '../../modules/chats';
import Conversation from './modules/conversation';
import { BlockProps } from '../../types';

export interface IChatSelected extends BlockProps {
  chats: Chats;
  content: Conversation;
}
