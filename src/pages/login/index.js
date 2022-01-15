import Handlebars from 'handlebars';
import link from '../../components/link';
import authorization from '../../layouts/authorization';
import { loginForm } from './modules/loginForm';

const login = authorization.render({
  form: loginForm(),
  link: link.render({ content: 'Sign up', url: './register.html' }),
});

document.querySelector('#root').innerHTML = login;
