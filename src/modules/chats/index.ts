import Block from '../block';
import chatsTmpl from './chats.tmpl';

import Chat from './components/chat';
import Avatar from '../../components/avatar';
import Input from '../../components/form/input';
import Link from '../../components/link';

import { IChats } from './types';
import burgerIcon from '../../../static/icons/burgerIcon';
import userAvatar from '../../../static/images/userAvatar.png';
import chatsData from '../../utils/data/chatsData';

export class Chats extends Block {
  constructor(props: IChats) {
    super(chatsTmpl, props);
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

export function ChatsModule(): Chats {
  const link = new Link({
    content: burgerIcon,
    url: 'profile.html',
  });

  const chatList = chatsData.map(
    ({ username, sender, message, time }) =>
      new Chat({
        avatar: new Avatar({
          source: userAvatar,
        }),
        username: new Link({ content: username, url: 'chatSelected.html' }),
        sender,
        message,
        time,
      }),
  );

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

  return new Chats({
    profile: link,
    search,
    chatList,
  });
}
