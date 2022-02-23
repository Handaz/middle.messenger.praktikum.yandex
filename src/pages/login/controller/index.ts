import LoginAPI from '../api';
import Router from '../../../utils/classes/router';
import catchDec from '../../../utils/decorators/catchDec';
import validationDec from '../../../utils/decorators/validationDec';
import { validationSchema } from '../utils/index';
import { LoginForm } from '../types';
import { FormControllerProps } from '../../../types/controller';

const loginApi = new LoginAPI();

class LoginController {
  data: LoginForm;

  @validationDec(validationSchema)
  @catchDec
  public async login(_params: FormControllerProps) {
    await loginApi.request(this.data);
    Router.go('/');
  }
}

export default new LoginController();
