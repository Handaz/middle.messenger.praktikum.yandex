import Handlebars from 'handlebars';
import registerTmpl from './register.tmpl';
import link from '../../components/link';
import { registerForm } from './modules/registerForm';

const template = Handlebars.compile(registerTmpl, { noEscape: true });
const register = template({
  form: registerForm(),
  link: link.render({ content: 'Sign up', url: './login.html' }),
});

document.querySelector('#root').innerHTML = register;
