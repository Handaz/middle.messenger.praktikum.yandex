import profile from '../../layouts/profile';
import { navigation } from '../../modules/navigation';
import { profileInfo } from './modules/profileInfo';

const profileContent = profile.render({
  sidebar: navigation(),
  content: profileInfo(),
});

document.querySelector('#root').innerHTML = profileContent;
