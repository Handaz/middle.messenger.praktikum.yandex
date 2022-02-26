import { Controller, FormControllerProps } from '../../controller';

import ProfileChangeAPI from '../api';
import UserAPI from '../../../api/user';
import Store from '../../../store';
import Router from '../../../utils/classes/router';
import catchDec from '../../../utils/decorators/catchDec';
import validationDec from '../../../utils/decorators/validationDec';
import validationSchema from '../../../utils/data/userValidationSchema';
import { ProfileChangeForm } from '../types';

class ProfileChangeController extends Controller<ProfileChangeForm> {
  @validationDec(validationSchema)
  @catchDec
  public async changeProfile(_params: FormControllerProps) {
    await ProfileChangeAPI.changeProfile(this.data);
    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
    Router.go('/profile');
  }
}

export default new ProfileChangeController();
