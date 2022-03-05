import {
  Controller,
  FormControllerProps,
} from '../../../../../modules/controller';

import Store from '../../../../../store';
import ChatsAPI from '../../../../../api/chats';
import UserAPI from '../../../../../api/user';
import { Indexed } from '../../../../../types';
import { IAddMember } from '../types';
import catchDec from '../../../../../utils/decorators/catchDec';
import validationDec from '../../../../../utils/decorators/validationDec';
import validationSchema from '../utils/validationSchema';

class ConversationController extends Controller<IAddMember> {
  @catchDec
  public async removeMember(id: number) {
    const { messages } = Store.getState();
    const data = {
      users: [id],
      chatId: messages.chat,
    };

    await ChatsAPI.removeChatMember(data);

    this.updateUsers();
  }

  @validationDec(validationSchema)
  @catchDec
  public async addMember(_props: FormControllerProps) {
    const { messages } = Store.getState();
    const users = await UserAPI.findUser(this.data);

    // TODO: make a dropdown menu with list of users from last api call
    const data = {
      users: [users[0].id],
      chatId: messages.chat,
    };

    await ChatsAPI.addChatMember(data);

    this.updateUsers();
  }

  @catchDec
  public async updateUsers() {
    const { currChats, messages } = Store.getState();

    const members = await ChatsAPI.getChatMembers(messages.chat);
    const chats = currChats.map((item: Indexed) => {
      if (item.id === messages.chat) {
        item.members = members;
      }
      return item;
    });

    Store.set('currChants', chats);
  }
}

export default new ConversationController();
