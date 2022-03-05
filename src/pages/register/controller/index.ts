import { Controller, FormControllerProps } from '../../../modules/controller';
import Store from '../../../store';

import RegisterAPI from '../api';
import UserAPI from '../../../api/user';
import catchDec from '../../../utils/decorators/catchDec';
import validationDec from '../../../utils/decorators/validationDec';
import Router from '../../../utils/classes/router';
import validationSchema from '../../../utils/data/userValidationSchema';
import { RegisterForm } from '../types';

class RegisterController extends Controller<RegisterForm> {
  @validationDec(validationSchema)
  @catchDec
  public async register(_params: FormControllerProps) {
    await RegisterAPI.register(this.data);
    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
    Router.go('/');
  }
}

export default new RegisterController();
