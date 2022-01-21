import Handlebars from 'handlebars';
import template from './form.tmpl';

import './form.module.scss';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
