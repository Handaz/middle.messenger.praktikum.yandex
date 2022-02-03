import Block from '../block';
import chatsTmpl from './chats.tmpl';
import { IChats } from './types';

export default class Chats extends Block {
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
