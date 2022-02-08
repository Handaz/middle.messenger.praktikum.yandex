import { BlockProps } from '../../types';
import { Conversation } from './modules/conversation';
import Sidebar from '../../components/sidebar';

export interface IChatSelected extends BlockProps {
  chats: Sidebar;
  content: Conversation;
}
