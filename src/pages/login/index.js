import button from '../../components/button';
import { loginTmpl } from './login.tmpl';
import Handlebars from 'handlebars';

const template = Handlebars.compile(loginTmpl, { noEscape: true });
const login = template({ form: `${button.render({ text: 'button' })}` });

document.body.innerHTML = login;
