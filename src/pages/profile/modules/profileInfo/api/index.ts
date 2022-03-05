import BaseAPI from '../../../../../utils/classes/baseApi';
import apiCall from '../../../../../utils/classes/request';
import { IUserInfo } from '../../../../../api/user/types';

class ProfileAPI extends BaseAPI<
  undefined | FormData,
  Promise<string | IUserInfo>
> {
  public async logout() {
    const res = await apiCall.post<undefined, string>('auth/logout');

    return res;
  }

  public async changeAvatar(data: FormData) {
    const res = await apiCall.put<FormData, IUserInfo>('user/profile/avatar', {
      data,
    });

    return res;
  }
}

export default new ProfileAPI();
