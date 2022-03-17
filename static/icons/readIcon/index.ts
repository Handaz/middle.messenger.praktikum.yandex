import Handlebars from 'handlebars';
import template from './readIcon.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default render({});
