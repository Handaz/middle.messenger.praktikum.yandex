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
  public async open(token: string, id: number) {
    const { user, ...state } = Store.getState();

    if (user) {
      let { chatsInfo } = state;
      const socket = new WSService(user.id, id, token);

      if (!chatsInfo) {
        chatsInfo = [];
      }

      chatsInfo.push({ socket, token, id, messages: [] });
      Store.set('chatsInfo', chatsInfo);
    }
  }

  @catchDec
  public async getConversation(id: number) {
    const { chatsInfo, chat } = Store.getState();

    if (chat?.id === id) {
      return;
    }

    Store.set('chat', { id, messages: [], members: [] });

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

    this.currentSocket = curChat.socket;

    if (curChat.messages) {
      Store.set('chat', {
        id,
        members: curChat.members,
        messages: [],
      });
      this.currentSocket.getChatHistory();
    } else {
      Store.set('chat', {
        id,
        members: curChat.members,
        messages: curChat.messages,
      });
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
