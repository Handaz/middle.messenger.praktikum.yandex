import Handlebars from 'handlebars';
import template from './conversationInfo.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
