import BaseAPI from '../../../utils/classes/baseApi';
import apiCall from '../../../utils/classes/request';
import { ILoginForm } from '../types';

export default class LoginAPI extends BaseAPI<ILoginForm, Promise<any>> {
  public async request(user: ILoginForm) {
    const res = await apiCall.post<ILoginForm, any>('/login', { data: user });
    console.log(res);
    return res;
  }
}
