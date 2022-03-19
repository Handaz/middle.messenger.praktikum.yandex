import { Controller, FormControllerProps } from '../../controller';
import Store from '../../../store';

import ConversationController from '../../../pages/chatSelected/modules/conversation/controller';
import ChatsAPI from '../../../api/chats';
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
  public async connectToChats(chats: IChatsInfo[]) {
    chats.forEach((chat) => this.connectToChat(chat));
  }

  @catchDec
  public async connectToChat(chat: IChatsInfo) {
    const { id, avatar, title } = chat;
    const res = await ChatsAPI.getChat(id);

    ConversationController.open(res.token, id, avatar, title);
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
