import Handlebars from 'handlebars';
import template from './chat.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
