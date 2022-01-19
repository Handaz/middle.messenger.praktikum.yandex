import Handlebars from 'handlebars';
import template from './sidebar.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
