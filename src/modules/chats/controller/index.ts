import { Controller, FormControllerProps } from '../../controller';
import Store from '../../../store';

import ChatsAPI from '../../../api/chats';
import WSService from '../../../utils/classes/wsService';
import catchDec from '../../../utils/decorators/catchDec';
import { IChatsInfo, ICreateChat } from '../../../api/chats/types';
import validationDec from '../../../utils/decorators/validationDec';
import { validationSchema } from '../utils';

class ChatsController extends Controller<ICreateChat> {
  @catchDec
  public async getChats() {
    const chats = await ChatsAPI.getChats();
    Store.set('chats', chats);
    this.connectToChats(chats);
  }

  @catchDec
  connectToChats(chats: IChatsInfo[]) {
    const { user, ...state } = Store.getState();

    if (user) {
      let { chatsInfo } = state;

      if (!chatsInfo) {
        chatsInfo = [];
      }

      chats.forEach(async ({ id, avatar, title }) => {
        const { token } = await ChatsAPI.getChat(id);

        const socket = new WSService(user.id, id, token);

        chatsInfo!.push({
          socket,
          token,
          messages: null,
          members: null,
          id,
          avatar,
          title,
        });
      });

      Store.set('chatsInfo', chatsInfo);
    }
  }

  @validationDec(validationSchema)
  @catchDec
  public async createChat(_params: FormControllerProps, callback: () => void) {
    await ChatsAPI.createChat(this.data);

    this.getChats();
    callback();
  }
}

export default new ChatsController();
