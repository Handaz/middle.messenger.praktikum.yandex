import { BlockProps } from '../../../../../../types';
import Button from '../../../../../../components/button';
import Form from '../../../../../../components/form';

export interface IConversationActions extends BlockProps {
  attachments: Button;
  messageForm: Form;
}
