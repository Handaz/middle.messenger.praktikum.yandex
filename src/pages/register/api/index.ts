import BaseAPI from '../../../utils/classes/baseApi';
import apiCall from '../../../utils/classes/request';
import { RegisterData, RegisterForm } from '../types';

class RegisterAPI extends BaseAPI<RegisterForm, Promise<RegisterData>> {
  public async register(user: RegisterForm) {
    const res = await apiCall.post<RegisterForm, RegisterData>('auth/signup', {
      data: user,
    });

    return res;
  }
}
export default new RegisterAPI();
