import Block from '../../../../../../modules/block';
import template from './conversationActions.tmpl';
import { IConversationActions } from './types';

export default class ConversationActions extends Block {
  constructor(props: IConversationActions) {
    super(template, props);
  }

  render() {
    const { attachments, messageForm } = this.props;

    return this.compile({
      attachments,
      messageForm,
    });
  }
}
