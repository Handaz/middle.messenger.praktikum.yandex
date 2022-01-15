import Handlebars from 'handlebars';
import profile from '../../layouts/profile';
import { navigation } from '../../modules/navigation';
import { profileInfo } from './modules/profileInfo';

const login = profile.render({
  sidebar: navigation(),
  content: profileInfo(),
});

document.querySelector('#root').innerHTML = login;
