import Block from '../../modules/block';
import { ChatsModule } from '../../modules/chats';
import { ConversationModule } from './modules/conversation';

import Sidebar from '../../components/sidebar';

import main from '../../layouts/main';
import { IChatSelected } from './types';

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
  content: ChatsModule(),
  chats: true,
});

const conversation = ConversationModule();

export default new ChatSelected({
  chats: sidebar,
  content: conversation,
});
