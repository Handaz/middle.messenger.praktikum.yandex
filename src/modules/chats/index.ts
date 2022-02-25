import Block from '../block';
import chatsTmpl from './chats.tmpl';

import Input from '../../components/form/input';
import Link from '../../components/link';

import ChatsController from './controller';
import Store from '../../store';
import { IChats } from './types';
import burgerIcon from '../../../static/icons/burgerIcon';
import connect from '../../utils/functions/hoc';
import mapStateToChats from './utils';

export class Chats extends Block<IChats> {
  constructor(props: IChats) {
    super(chatsTmpl, props);
  }

  render() {
    const { profile, search, chatList } = this.props;
    const { chats } = Store.getState();

    if (!chats) {
      ChatsController.getChats();
    }

    return this.compile({
      profile,
      search,
      chatList,
    });
  }
}

const chats = connect<IChats>(mapStateToChats);

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
