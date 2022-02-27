import { Controller, FormControllerProps } from '../../controller';

import ProfileChangeAPI from '../api';
import UserAPI from '../../../api/user';
import Store from '../../../store';
import Router from '../../../utils/classes/router';
import catchDec from '../../../utils/decorators/catchDec';
import validationDec from '../../../utils/decorators/validationDec';
import validationSchema from '../../../utils/data/userValidationSchema';
import { PasswordChangeForm, ProfileChangeForm } from '../types';

class ProfileChangeController extends Controller {
  profileData: ProfileChangeForm;

  passwordData: PasswordChangeForm;

  @validationDec(validationSchema, 'profileData')
  @catchDec
  public async changeProfile(_params: FormControllerProps) {
    await ProfileChangeAPI.changeProfile(this.profileData);
    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
    Router.go('/profile');
  }

  @validationDec(validationSchema, 'passwordData')
  @catchDec
  public async changePassword(_params: FormControllerProps) {
    const { newPasswordConfirm, ...passwordData } = this.passwordData;
    await ProfileChangeAPI.changePassword(passwordData);
    const user = await UserAPI.getCurrentUser();
    Store.set('user', user);
    Router.go('/profile');
  }
}

export default new ProfileChangeController();
