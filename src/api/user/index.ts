import BaseAPI from '../../utils/classes/baseApi';
import apiCall from '../../utils/classes/request';
import { IUserInfo, IUserSearch } from './types';

class UserAPI extends BaseAPI<undefined, Promise<IUserInfo | IUserInfo[]>> {
  public async getCurrentUser() {
    const res = await apiCall.get<undefined, IUserInfo>('auth/user');

    return res;
  }

  public async findUser(data: IUserSearch) {
    const res = await apiCall.post<IUserSearch, IUserInfo[]>('user/search', {
      data,
    });

    return res;
  }

  public async getUser(id: number) {
    const res = await apiCall.get<number, IUserInfo>(`user/${id}`);

    return res;
  }
}

export default new UserAPI();
