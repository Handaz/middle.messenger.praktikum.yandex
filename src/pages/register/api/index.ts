import BaseAPI from '../../../utils/classes/baseApi';
import apiCall from '../../../utils/classes/request';
import { RegisterForm } from '../types';

export default class RegisterAPI extends BaseAPI<RegisterForm, Promise<any>> {
  public async request(user: RegisterForm) {
    const res = await apiCall.post<RegisterForm, any>('auth/signup', {
      data: user,
    });

    console.log(res);
    return res;
  }
}
