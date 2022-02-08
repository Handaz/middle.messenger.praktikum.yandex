import Block from '../../../../../../modules/block';
import template from './conversationInfo.tmpl';
import { IConversationInfo } from './types';

export default class ConversationInfo extends Block<IConversationInfo> {
  constructor(props: IConversationInfo) {
    super(template, props);
  }

  render() {
    const { avatar, username, button } = this.props;

    return this.compile({
      avatar,
      username,
      button,
    });
  }
}
