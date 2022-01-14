import Handlebars from 'handlebars';
import link from '../../components/link';
import loginTmpl from './login.tmpl';
import { loginForm } from './modules/loginForm';

const template = Handlebars.compile(loginTmpl, { noEscape: true });

const login = template({
  form: loginForm(),
  link: link.render({ content: 'Sign up', url: './register.html' }),
});

document.querySelector('#root').innerHTML = login;
