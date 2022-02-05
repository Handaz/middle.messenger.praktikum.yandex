import Block from '../../modules/block';
import Chats from '../../modules/chats';

import Sidebar from '../../components/sidebar';
import SystemMessage from './components/systemMessage';
import { IChatSelect } from './types';

import main from '../../layouts/main';
import render from '../../utils/renderDom';

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

const chats = Chats();

const sidebar = new Sidebar({
  content: chats,
});

const chatSelect = new ChatSelect({
  chats: sidebar,
  content: new SystemMessage({
    message: 'Select a chat to start messaging',
  }),
});

render('#root', chatSelect);
