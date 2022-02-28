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
    const state = Store.getState();

    if (state.user) {
      let { currChats } = state;
      const socket = new WSService(state.user.id, id, token);

      if (!currChats) {
        Store.set('currChats', []);
        currChats = Store.getState().currChats;
      }

      const members = await ChatsAPI.getChatMembers(id);

      currChats.push({ socket, token, id, messages: [], members });
      Store.set('currChats', currChats);
    }
  }

  getConversation(id: number) {
    const { currChats, messages } = Store.getState();

    if (!currChats) {
      throw new Error('No chats available');
    }

    if (!messages) {
      Store.set('messages', { chat: id, data: [] });
    }

    const chat = currChats.find((item: Indexed) => item.id === id);

    if (!chat) {
      throw new Error(`No chat found with id: ${id}`);
    }

    this.currentSocket = chat.socket;

    if (chat.messages.length === 0) {
      this.currentSocket.getChatHistory();
    } else {
      Store.set('messages', { chat: chat.id, data: chat.messages });
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
