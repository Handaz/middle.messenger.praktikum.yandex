import BaseAPI from '../../utils/classes/baseApi';
import apiCall from '../../utils/classes/request';
import { IUserInfo } from './types';

class UserAPI extends BaseAPI<undefined, Promise<IUserInfo>> {
  public async getCurrentUser() {
    const res = await apiCall.get<undefined, IUserInfo>('auth/user');

    return res;
  }
}

export default new UserAPI();
