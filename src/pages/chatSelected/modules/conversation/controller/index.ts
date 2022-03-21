import {
  Controller,
  FormControllerProps,
} from '../../../../../modules/controller';

import ConversationAPI from '../../../api';
import ChatsAPI from '../../../../../api/chats';
import WSService, {
  WSServiceMessageTypes,
} from '../../../../../utils/classes/wsService';
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
  public async getConversation(id: number) {
    const { chatsInfo, chats, chat } = Store.getState();

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

    Store.set(
      'chats',
      chats?.map((item) => {
        if (item.id === id) {
          item.unread_count = 0;
        }
        return item;
      }),
    );

    if (!messages) {
      this.currentSocket.getChatHistory();
    }

    // TODO: multi-level routing #${id}
    Router.go(`/chat`);
  }

  @catchDec
  @validationDec(validationSchema)
  public async send(_params: FormControllerProps) {
    const { message, file } = this.data;

    let content = message ?? '';

    if (file) {
      const body = new FormData();
      body.append('resource', file);

      const res = await ConversationAPI.uploadFile(body);
      content = res.id.toString();
    }

    this.currentSocket.send(
      file ? WSServiceMessageTypes.FILE : WSServiceMessageTypes.MESSAGE,
      content,
    );
  }

  public close() {
    if (this.currentSocket) {
      this.currentSocket.close();
    }
  }

  public getMessages() {
    const { chat } = Store.getState();

    this.currentSocket.getChatHistory(chat?.messages?.length);
  }
}

export default new ConversationController();
