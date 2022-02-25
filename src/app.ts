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
// import Store, { StoreEvents } from './store';

// Router.use('/404', Error404)
//   .use('/500', Error500)
//   .use('/register', Register)
//   .use('/login', Login)
//   .start();

// Store.on(StoreEvents.Updated, () => {
//   if (Store.getState().user) {
Router.use('/404', Error404)
  .use('/500', Error500)
  .use('/register', Register)
  .use('/login', Login)
  .use('/', ChatSelect)
  .use('/chat', ChatSelected)
  .use('/profile', Profile)
  .use('/password-change', PasswordChange)
  .use('/profile-change', ProfileChange)
  .start();
//   }
// });
