import {
  Controller,
  FormControllerProps,
} from '../../../../../modules/controller';
import Store from '../../../../../store';

import UserAPI from '../../../../../api/user';
import ProfileAPI from '../api';
import catchDec from '../../../../../utils/decorators/catchDec';
import validationDec from '../../../../../utils/decorators/validationDec';
import Router from '../../../../../utils/classes/router';
import validationSchema from '../../../../../utils/data/userValidationSchema';
import { AvatarForm } from '../types';

class ProfileController extends Controller<AvatarForm> {
  @catchDec
  public async getUser() {
    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
  }

  @catchDec
  public async logout(e: MouseEvent) {
    e.preventDefault();
    await ProfileAPI.logout();
    Router.go('/login');
  }

  @validationDec(validationSchema)
  @catchDec
  public async changeAvatar(
    _params: FormControllerProps,
    callback: () => void,
  ) {
    const data = new FormData();
    data.append('avatar', this.data.avatar);
    const user = await ProfileAPI.changeAvatar(data);
    Store.set('user', user);
    callback();
  }
}

export default new ProfileController();
