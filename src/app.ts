import Error404 from './pages/404';
import Error500 from './pages/500';
import Register from './pages/register';
import Login from './pages/login';
import ChatSelect from './pages/chatSelect';
import ChatSelected from './pages/chatSelected';
import Profile from './pages/profile';
import PasswordChange from './pages/passwordChange';
import ProfileChange from './pages/profileChange';

import Router from './utils/classes/router';
import Store, { StoreEvents } from './store';
import Block from './modules/block';
import UserAPI from './api/user';
import { IUserInfo } from './api/user/types';

interface Pages {
  path: string;
  block: Block;
}

class App {
  currUser: IUserInfo | null = null;

  defaultPages: Pages[];

  loggedPages: Pages[];

  constructor() {
    Store.on(StoreEvents.Updated, this.handleStoreUpdate.bind(this));

    this.defaultPages = [
      { path: '/404', block: Error404 },
      { path: '/500', block: Error500 },
      { path: '/register', block: Register },
      { path: '/', block: Login },
    ];

    this.loggedPages = [
      { path: '/404', block: Error404 },
      { path: '/500', block: Error500 },
      { path: '/', block: ChatSelect },
      { path: '/chat', block: ChatSelected },
      { path: '/profile', block: Profile },
      { path: '/password-change', block: PasswordChange },
      { path: '/profile-change', block: ProfileChange },
    ];

    this.initialRender();
  }

  async initialRender() {
    try {
      await UserAPI.getCurrentUser();
    } catch (err) {
      this.handleRoutes();
    }
  }

  handleStoreUpdate() {
    const { user } = Store.getState();

    if ((!this.currUser && user) || (!user && this.currUser)) {
      this.currUser = user;
      Router.routes = [];
    }

    this.handleRoutes();
  }

  handleRoutes() {
    if (!this.currUser) {
      this.defaultPages.forEach(({ path, block }) => Router.use(path, block));
    } else {
      this.loggedPages.forEach(({ path, block }) => Router.use(path, block));
    }
    Router.start();
  }
}

export default new App();
