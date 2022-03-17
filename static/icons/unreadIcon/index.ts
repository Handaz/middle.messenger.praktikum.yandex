import Handlebars from 'handlebars';
import template from './unreadIcon.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default render({});
