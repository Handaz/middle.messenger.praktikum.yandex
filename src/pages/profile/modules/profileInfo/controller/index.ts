import { Controller } from '../../../../../modules/controller';
import Store from '../../../../../store';

import UserAPI from '../../../../../api/user';
import ProfileAPI from '../api';
import catchDec from '../../../../../utils/decorators/catchDec';
import Router from '../../../../../utils/classes/router';

class ProfileController extends Controller {
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
}

export default new ProfileController();
