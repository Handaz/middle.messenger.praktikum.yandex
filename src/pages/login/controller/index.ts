import { Controller, FormControllerProps } from '../../../modules/controller';
import Store from '../../../store';

import LoginAPI from '../api';
import UserAPI from '../../../api/user';
import Router from '../../../utils/classes/router';
import catchDec from '../../../utils/decorators/catchDec';
import validationDec from '../../../utils/decorators/validationDec';
import { validationSchema } from '../utils/index';
import { LoginForm } from '../types';

class LoginController extends Controller<LoginForm> {
  @validationDec(validationSchema)
  @catchDec
  public async login(_params: FormControllerProps) {
    await LoginAPI.request(this.data);
    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
    Router.go('/');
  }
}

export default new LoginController();
