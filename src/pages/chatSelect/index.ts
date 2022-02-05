import Block from '../../modules/block';
import { ChatsModule } from '../../modules/chats';

import Sidebar from '../../components/sidebar';
import SystemMessage from './components/systemMessage';

import main from '../../layouts/main';
import { IChatSelect } from './types';
import render from '../../utils/functions/renderDom';

class ChatSelect extends Block {
  constructor(props: IChatSelect) {
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

const chats = ChatsModule();

const sidebar = new Sidebar({
  content: chats,
});

const content = new ChatSelect({
  chats: sidebar,
  content: new SystemMessage({
    message: 'Select a chat to start messaging',
  }),
});

render('#root', content);
