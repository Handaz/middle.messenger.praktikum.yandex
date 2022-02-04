import * as classes from './contentBlock.module.scss';

export default `
<div class='${classes.contentBlock} {{#if authForm}}${classes.authForm}{{/if}}'>
  <div class=${classes.title}>{{ title }}</div>
  <div>{{ content }}<div>
</div>`;
