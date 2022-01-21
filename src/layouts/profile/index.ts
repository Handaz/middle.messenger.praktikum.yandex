import Handlebars from 'handlebars';
import template from './profile.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
