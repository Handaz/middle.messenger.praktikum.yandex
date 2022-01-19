import profile from '../../layouts/profile';
import { navigation } from '../../modules/navigation';
import { profileForm } from './modules/profileForm';

const profileChange = profile.render({
  sidebar: navigation(),
  content: profileForm(),
});

document.querySelector('#root').innerHTML = profileChange;
