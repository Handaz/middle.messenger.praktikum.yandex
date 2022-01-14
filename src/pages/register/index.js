import { registerTmpl } from './register.tmpl';
import Handlebars from 'handlebars';

const template = Handlebars.compile(loginTmpl, { noEscape: true });
const register = template({ form: `${button.render({ text: 'button' })}` });

document.body.innerHTML = register;
