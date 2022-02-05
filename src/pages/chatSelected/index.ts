import Block from '../../modules/block';
import Chats from '../../modules/chats';
import Conversation from './modules/conversation';

import Sidebar from '../../components/sidebar';

import { IChatSelected } from './types';
import main from '../../layouts/main';
import render from '../../utils/renderDom';

class ChatSelected extends Block {
  constructor(props: IChatSelected) {
    super(main.template, props);
  }

  render() {
    const { chats, content } = this.props;

    return this.compile({
      chats,
      content,
    });
  }
}

const sidebar = new Sidebar({
  content: Chats(),
});

const conversation = Conversation();

const content = new ChatSelected({
  chats: sidebar,
  content: conversation,
});

render('#root', content);
