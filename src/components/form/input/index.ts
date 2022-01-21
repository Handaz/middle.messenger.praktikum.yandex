import Handlebars from 'handlebars';
import template from './input.tmpl';

import './input.module.scss';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
