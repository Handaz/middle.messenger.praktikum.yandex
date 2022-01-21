import Handlebars from 'handlebars';
import template from './conversationActions.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
