import profile from '../../layouts/profile';
import navigation from '../../modules/navigation';
import profileForm from './modules/profileForm';

const profileChange = profile.render({
  sidebar: navigation(),
  content: profileForm(),
});

const root = document.querySelector('#root');

if (root) {
  root.innerHTML = profileChange;
}
