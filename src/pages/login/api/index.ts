import BaseAPI from '../../../utils/classes/baseApi';
import apiCall from '../../../utils/classes/request';
import { LoginForm } from '../types';

class LoginAPI extends BaseAPI<LoginForm, Promise<string>> {
  public async request(user: LoginForm) {
    const res = await apiCall.post<LoginForm, string>('auth/signin', {
      data: user,
    });

    return res;
  }
}

export default new LoginAPI();
