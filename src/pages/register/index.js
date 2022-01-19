import Handlebars from 'handlebars';
import authorization from '../../layouts/authorization';
import link from '../../components/link';
import { registerForm } from './modules/registerForm';

const register = authorization.render({
  form: registerForm(),
  link: link.render({ content: 'Sign up', url: './login.html' }),
});

document.querySelector('#root').innerHTML = register;
