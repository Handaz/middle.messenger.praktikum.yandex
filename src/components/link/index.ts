import Handlebars from 'handlebars';
import template from './link.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
