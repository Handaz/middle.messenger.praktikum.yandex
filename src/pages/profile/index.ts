import profile from '../../layouts/profile';
import navigation from '../../modules/navigation';
import profileInfo from './modules/profileInfo';

const profileContent = profile.render({
  sidebar: navigation(),
  content: profileInfo(),
});

const root = document.querySelector('#root');

if (root) {
  root.innerHTML = profileContent;
}
