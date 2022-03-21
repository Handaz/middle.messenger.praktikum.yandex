import ConversationInfo from '../conversationInfo';
import ConversationActions from './components/conversationActions';
import Messages from './components/messages';
import { BlockProps } from '../../../../types';

export interface IConversation extends BlockProps {
  topBar: ConversationInfo;
  messages: Messages;
  bottomBar: ConversationActions;
}

export type MessageForm = {
  message?: string;
  file?: File;
};
