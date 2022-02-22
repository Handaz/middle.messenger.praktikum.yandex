import BaseAPI from '../../../utils/classes/baseApi';
import apiCall from '../../../utils/classes/request';
import { RegisterData, RegisterForm } from '../types';

export default class RegisterAPI extends BaseAPI<
  RegisterForm,
  Promise<RegisterData>
> {
  public async create(user: RegisterForm) {
    const res = await apiCall.post<RegisterForm, RegisterData>('auth/signup', {
      data: user,
    });

    return res;
  }
}
