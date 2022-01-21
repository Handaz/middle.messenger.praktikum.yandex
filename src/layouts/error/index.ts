import Handlebars from 'handlebars';
import template from './error.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
