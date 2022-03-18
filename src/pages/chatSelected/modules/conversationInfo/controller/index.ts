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
    const { chat } = Store.getState();

    if (!chat) {
      throw new Error('No chat data is available');
    }

    const data = {
      users: [id],
      chatId: chat.id,
    };

    await ChatsAPI.removeChatMember(data);

    this.updateUsers();
  }

  @validationDec(validationSchema)
  @catchDec
  public async addMember(_props: FormControllerProps) {
    const { chat } = Store.getState();

    if (!chat) {
      throw new Error('No chat was selected');
    }

    const users = await UserAPI.findUser(this.data);

    // TODO: make a dropdown menu with list of users from last api call
    const data = {
      users: [users[0].id],
      chatId: chat.id,
    };

    await ChatsAPI.addChatMember(data);

    this.updateUsers();
  }

  @catchDec
  public async updateUsers() {
    const { chatsInfo, chat } = Store.getState();

    if (!chat || !chatsInfo) {
      throw new Error('No data for chats is available');
    }

    const members = await ChatsAPI.getChatMembers(chat.id);
    const currChats = chatsInfo.map((item: Indexed) => {
      if (item.id === chat.id) {
        item.members = members;
      }
      return item;
    });

    Store.set('chats', currChats);
  }
}

export default new ConversationController();
