import Block from '../block';
import chatsTmpl from './chats.tmpl';

import Chat from './components/chat';
import Avatar from '../../components/avatar';
import Input from '../../components/form/input';
import Link from '../../components/link';

import ChatsController from './controller';
import Store from '../../store';
import { IChats } from './types';
import burgerIcon from '../../../static/icons/burgerIcon';
import userAvatar from '../../../static/images/userAvatar.png';
// import chatsData from '../../utils/data/chatsData';
import connect from '../../utils/functions/hoc';

export class Chats extends Block<IChats> {
  constructor(props: IChats) {
    super(chatsTmpl, props);

    if (!Store.getState().chats) {
      ChatsController.getChats();
    }
  }

  render() {
    const { profile, search, chatList } = this.props;

    return this.compile({
      profile,
      search,
      chatList,
    });
  }
}

const chats = connect<IChats>((state) => {
  if (state.chats) {
    return {
      chatList: state.chats.map(
        ({ title, last_message }: Record<string, string>) =>
          new Chat({
            avatar: new Avatar({
              source: userAvatar,
            }),
            title: new Link({ content: title, url: 'chat' }),
            sender: 'test',
            message: last_message ?? '',
            time: '14 88',
          }),
      ),
    };
  }
  return { chatList: [] };
});

const ChatsHoc = chats(Chats);

export function ChatsModule(): Chats {
  const link = new Link({
    content: burgerIcon,
    url: 'profile',
  });

  const search = new Input({
    type: 'text',
    name: 'chatSearch',
    events: {
      keyup: (e: InputEvent) => {
        const input = e.target as HTMLInputElement;
        console.log(input.value);
      },
    },
  });

  return new ChatsHoc({
    profile: link,
    search,
    chatList: [],
  });
}
