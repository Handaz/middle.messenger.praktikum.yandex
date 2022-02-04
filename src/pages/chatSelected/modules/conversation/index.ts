import Block from '../../../../modules/block';
import template from './conversation.tmpl';
import { IConversation } from './types';

export default class Conversation extends Block {
  constructor(props: IConversation) {
    super(template, props);
  }

  render() {
    const { topBar, messages, bottomBar } = this.props;

    return this.compile({
      topBar,
      messages,
      bottomBar,
    });
  }
}
