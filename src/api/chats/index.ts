import BaseAPI from '../../utils/classes/baseApi';
import apiCall from '../../utils/classes/request';
import { IUserInfo } from '../user/types';
import {
  IChatId,
  IChatMemberAction,
  IChatsInfo,
  IChatToken,
  ICreateChat,
} from './types';

class ChatsAPI extends BaseAPI<
  undefined,
  Promise<IChatsInfo[] | IChatToken | IUserInfo[] | string>
> {
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

  public async getChatMembers(id: number) {
    const res = await apiCall.get<number, IUserInfo[]>(`chats/${id}/users`);

    return res;
  }

  public async addChatMember(data: IChatMemberAction) {
    const res = await apiCall.put<IChatMemberAction, string>(`chats/users`, {
      data,
    });

    return res;
  }

  public async removeChatMember(data: IChatMemberAction) {
    const res = await apiCall.delete<IChatMemberAction, string>(`chats/users`, {
      data,
    });

    return res;
  }
}
export default new ChatsAPI();
