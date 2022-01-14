import template from './contentBlock.tmpl';
import Handlebars from 'handlebars';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
