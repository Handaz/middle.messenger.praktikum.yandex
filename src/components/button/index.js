import Handlebars from 'handlebars';
import template from './button.tmpl';

import './button.module.scss';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
