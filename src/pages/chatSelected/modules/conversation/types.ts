import { BlockProps } from '../../../../types';
import ConversationInfo from '../conversationInfo';
import ConversationActions from './components/conversationActions';
import Message from './components/message';

export interface IConversation extends BlockProps {
  topBar: ConversationInfo;
  messages: Message[];
  bottomBar: ConversationActions;
  loader?: boolean;
}

export type MessageForm = {
  message: string;
};
