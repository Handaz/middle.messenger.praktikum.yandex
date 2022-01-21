import Handlebars from 'handlebars';
import template from './message.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
