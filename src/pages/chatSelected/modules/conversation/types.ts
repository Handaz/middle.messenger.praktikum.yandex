import { BlockProps } from '../../../../types';
import ConversationInfo from './components/conversationInfo';
import ConversationActions from './components/conversationActions';
import Message from './components/message';

export interface IConversation extends BlockProps {
  topBar: ConversationInfo;
  messages: Message[];
  bottomBar: ConversationActions;
}
