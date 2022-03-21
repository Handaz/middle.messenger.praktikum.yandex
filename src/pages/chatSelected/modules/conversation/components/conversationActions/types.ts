import Form from '../../../../../../components/form';
import { BlockProps } from '../../../../../../types';

export interface IConversationActions extends BlockProps {
  attachments: Form;
  messageForm: Form;
}
