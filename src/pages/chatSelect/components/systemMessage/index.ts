import Handlebars from 'handlebars';
import template from './systemMessage.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
