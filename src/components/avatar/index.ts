import Handlebars from 'handlebars';
import template from './avatar.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
