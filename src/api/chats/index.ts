import BaseAPI from '../../utils/classes/baseApi';
import apiCall from '../../utils/classes/request';
import { IChatsInfo } from './types';

class ChatsAPI extends BaseAPI<undefined, Promise<IChatsInfo>> {
  public async getChats() {
    const res = await apiCall.get<undefined, IChatsInfo>('/chats');

    return res;
  }
}
export default new ChatsAPI();
