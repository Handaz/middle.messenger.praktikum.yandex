import Block from '../../../../../../modules/block';
import template from './conversationActions.tmpl';
import { IConversationActions } from './types';
import classes from './conversationActions.module.scss';

export default class ConversationActions extends Block<IConversationActions> {
  constructor(props: IConversationActions) {
    super(template, props);
  }

  render() {
    const { attachments, messageForm } = this.props;

    const blockClasses = {
      actions: classes.actions,
      form: classes.form,
    };

    return this.compile({
      attachments,
      messageForm,
      blockClasses,
    });
  }
}
