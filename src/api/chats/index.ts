import BaseAPI from '../../utils/classes/baseApi';
import apiCall from '../../utils/classes/request';
import { IChatId, IChatsInfo, IChatToken, ICreateChat } from './types';

class ChatsAPI extends BaseAPI<undefined, Promise<IChatsInfo[]>> {
  public async getChats() {
    const res = await apiCall.get<undefined, IChatsInfo[]>('chats');

    return res;
  }

  public async getChat(id: number) {
    const res = await apiCall.post<IChatId, IChatToken>(`chats/token/${id}`);

    return res;
  }

  public async createChat(data: ICreateChat) {
    const res = await apiCall.post<ICreateChat, string>(`chats`, {
      data,
    });

    return res;
  }
}
export default new ChatsAPI();
