import { Controller, FormControllerProps } from '../../controller';
import Store from '../../../store';

import ChatsAPI from '../../../api/chats';
import WSService from '../../../utils/classes/wsService';
import catchDec from '../../../utils/decorators/catchDec';
import { IChatsInfo, ICreateChat, IGetChats } from '../../../api/chats/types';
import validationDec from '../../../utils/decorators/validationDec';
import { validationSchema } from '../utils';

class ChatsController extends Controller<ICreateChat> {
  @catchDec
  public async getChats(data?: IGetChats) {
    const { chats } = Store.getState();

    if (!data) {
      data = {
        offset: chats?.length ?? 0,
        limit: 10,
      };
    }

    const incomingChats = await ChatsAPI.getChats(data);

    const newChats = chats ? chats.concat(incomingChats) : incomingChats;
    Store.set('chats', newChats);
    this.connectToChats(newChats);
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

    this.getChats({ limit: 20 });
    callback();
  }
}

export default new ChatsController();
