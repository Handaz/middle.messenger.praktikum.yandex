import { Controller } from '../../../modules/controller';
import Store from '../../../store';

import ChatsAPI from '../../../api/chats';
import catchDec from '../../../utils/decorators/catchDec';

class ChatsController extends Controller {
  @catchDec
  public async getChats() {
    const chats = await ChatsAPI.getChats();
    Store.set('chats', chats);
  }
}

export default new ChatsController();
