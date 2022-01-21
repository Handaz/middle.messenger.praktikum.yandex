import Handlebars from 'handlebars';
import template from './main.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
