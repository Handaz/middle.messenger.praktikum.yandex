import BaseAPI from '../../../utils/classes/baseApi';
import apiCall from '../../../utils/classes/request';
import { ProfileChangeForm } from '../types';

class ProfileChangeAPI extends BaseAPI<ProfileChangeForm, Promise<string>> {
  public async changeProfile(user: ProfileChangeForm) {
    const res = await apiCall.put<ProfileChangeForm, string>('user/profile', {
      data: user,
    });

    return res;
  }
}

export default new ProfileChangeAPI();
