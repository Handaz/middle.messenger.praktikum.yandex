import profile from '../../layouts/profile';
import { navigation } from '../../modules/navigation';
import { passwordForm } from './modules/passwordForm';

const passwordChange = profile.render({
  sidebar: navigation(),
  content: passwordForm(),
});

document.querySelector('#root').innerHTML = passwordChange;
