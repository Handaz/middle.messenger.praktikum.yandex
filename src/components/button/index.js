import Handlebars from 'handlebars';
import template from './button.tmpl';

import './Button.module.scss';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
