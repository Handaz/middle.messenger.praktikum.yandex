import Handlebars from 'handlebars';
import template from './contentBlock.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
