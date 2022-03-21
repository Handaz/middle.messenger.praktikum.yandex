import Form from '../../../../../../components/form';
import FileInput from '../../../../../../components/form/fileInput';
import { BlockProps } from '../../../../../../types';

export interface IConversationActions extends BlockProps {
  attachments: FileInput;
  messageForm: Form;
}
