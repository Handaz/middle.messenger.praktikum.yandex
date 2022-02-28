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
import isEqual from './utils/functions/isEqual';

if (Router.routes.length === 0) {
  Router.use('/404', Error404)
    .use('/500', Error500)
    .use('/register', Register)
    .use('/', Login)
    .start();
}

let { user: currUser } = Store.getState();

Store.on(StoreEvents.Updated, () => {
  const { user } = Store.getState();

  if (currUser && user && isEqual(currUser, user)) {
    return;
  }

  if (!currUser && user) {
    currUser = user;
  }

  if (currUser && user) {
    Router.routes = [];
    Router.use('/404', Error404)
      .use('/500', Error500)
      .use('/', ChatSelect)
      .use('/chat', ChatSelected)
      .use('/profile', Profile)
      .use('/password-change', PasswordChange)
      .use('/profile-change', ProfileChange)
      .start();
  }

  if (!user) {
    currUser = user;
    Router.routes = [];
    Router.use('/404', Error404)
      .use('/500', Error500)
      .use('/register', Register)
      .use('/', Login)
      .start();
  }
});
