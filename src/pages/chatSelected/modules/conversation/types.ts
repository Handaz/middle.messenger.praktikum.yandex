import ConversationInfo from '../conversationInfo';
import ConversationActions from './components/conversationActions';
import Message from './components/message';
import { BlockProps } from '../../../../types';

export interface IConversation extends BlockProps {
  topBar: ConversationInfo;
  messages: Message[];
  bottomBar: ConversationActions;
}

export type MessageForm = {
  message: string;
};
