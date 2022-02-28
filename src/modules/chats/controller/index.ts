import { Controller } from '../../controller';
import Store from '../../../store';

import ConversationController from '../../../pages/chatSelected/modules/conversation/controller';
import ChatsAPI from '../../../api/chats';
import catchDec from '../../../utils/decorators/catchDec';
import { Indexed } from '../../../types';

class ChatsController extends Controller {
  @catchDec
  public async getChats() {
    const newChats = await ChatsAPI.getChats();
    Store.set('chats', newChats);
    this.connectToChats();
  }

  @catchDec
  public async connectToChats() {
    const { chats } = Store.getState();
    if (chats) {
      chats.forEach(({ id }: Indexed) => this.connectToChat(id));
    }
  }

  @catchDec
  public async connectToChat(id: number) {
    const res = await ChatsAPI.getChat(id);

    ConversationController.open(res.token, id);
  }
}

export default new ChatsController();
