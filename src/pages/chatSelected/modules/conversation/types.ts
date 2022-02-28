import { BlockProps } from '../../../../types';
import ConversationInfo from './components/conversationInfo';
import ConversationActions from './components/conversationActions';
import Message from './components/message';

export interface IConversation extends BlockProps {
  topBar: ConversationInfo;
  messages: Message[];
  bottomBar: ConversationActions;
}

export interface IMessageData {
  id: number;
  user_id: number;
  chat_id: number;
  type: string;
  time: string;
  content: string;
  is_read: boolean;
  file: File | null;
}

export type MessageForm = {
  message: string;
};
