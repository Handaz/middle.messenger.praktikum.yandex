import Handlebars from 'handlebars';
import template from './authorization.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
