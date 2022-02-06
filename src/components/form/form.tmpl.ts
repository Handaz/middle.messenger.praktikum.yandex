import * as classes from './form.module.scss';

export default `
<form class='${classes.form}{{#if vertical}} ${classes.vertical}{{/if}}' novalidate>
  {{#each fields}}
    <div class=${classes.inputWrapper}>
      {{ this.input }}
      {{#if this.error}} {{ this.error }} {{/if}}
    </div>
  {{/each}}
  {{ button }}
</form>`;
