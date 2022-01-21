import profile from '../../layouts/profile';
import navigation from '../../modules/navigation';
import passwordForm from './modules/passwordForm';

const passwordChange = profile.render({
  sidebar: navigation(),
  content: passwordForm(),
});

const root = document.querySelector('#root');

if (root) {
  root.innerHTML = passwordChange;
}
