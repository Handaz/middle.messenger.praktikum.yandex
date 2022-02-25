import BaseAPI from '../../../../../utils/classes/baseApi';
import apiCall from '../../../../../utils/classes/request';

class ProfileAPI extends BaseAPI<undefined, Promise<string>> {
  public async logout() {
    const res = await apiCall.post<undefined, string>('auth/logout');

    return res;
  }
}

export default new ProfileAPI();
