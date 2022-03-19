import {
  Controller,
  FormControllerProps,
} from '../../../../../modules/controller';

import ChatsAPI from '../../../../../api/chats';
import WSService from '../../../../../utils/classes/wsService';
import Store from '../../../../../store';
import validationDec from '../../../../../utils/decorators/validationDec';
import validationSchema from '../utils/validationSchema';
import { MessageForm } from '../types';
import { Indexed } from '../../../../../types';
import Router from '../../../../../utils/classes/router';
import catchDec from '../../../../../utils/decorators/catchDec';

class ConversationController extends Controller<MessageForm> {
  currentSocket: WSService;

  @catchDec
  public async open(
    token: string,
    id: number,
    avatar: string | null,
    title: string,
  ) {
    const { user, ...state } = Store.getState();

    if (user) {
      let { chatsInfo } = state;
      const socket = new WSService(user.id, id, token);

      if (!chatsInfo) {
        chatsInfo = [];
      }

      chatsInfo.push({
        socket,
        token,
        messages: null,
        members: null,
        id,
        avatar,
        title,
      });
      Store.set('chatsInfo', chatsInfo);
    }
  }

  @catchDec
  public async getConversation(id: number) {
    const { chatsInfo, chat } = Store.getState();

    if (chat?.id === id) {
      return;
    }

    Store.set('chat', { id, messages: null, members: [] });

    if (!chatsInfo) {
      throw new Error('No chats available');
    }

    const curChat = chatsInfo.find((item: Indexed) => item.id === id);

    if (!curChat) {
      throw new Error(`No chat found with id: ${id}`);
    }

    if (!curChat.members) {
      const members = await ChatsAPI.getChatMembers(id);
      curChat.members = members;
      Store.set(
        'chatsInfo',
        chatsInfo.map((item) => (item.id === id ? { ...item, members } : item)),
      );
    }

    const { socket, avatar, title, members, messages } = curChat;

    this.currentSocket = socket;

    Store.set('chat', {
      id,
      members,
      messages,
      avatar,
      title,
    });

    if (!messages) {
      this.currentSocket.getChatHistory();
    }

    Router.go(`/chat`);
  }

  @validationDec(validationSchema)
  public send(_params: FormControllerProps) {
    const { message } = this.data;

    this.currentSocket.send(message);
  }

  public close() {
    if (this.currentSocket) {
      this.currentSocket.close();
    }
  }
}

export default new ConversationController();
