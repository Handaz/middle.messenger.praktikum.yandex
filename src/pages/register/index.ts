import authorization from '../../layouts/authorization';
import link from '../../components/link';
import { registerForm } from './modules/registerForm';

const register = authorization.render({
  form: registerForm(),
  link: link.render({ content: 'Sign up', url: './login.html' }),
});

const root = document.querySelector('#root');

if (root) {
  root.innerHTML = register;
}
