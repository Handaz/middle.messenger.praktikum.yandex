import Handlebars from 'handlebars';
import template from './arrow.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default render({});
