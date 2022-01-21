import * as classes from './form.module.scss';

export default `
<form class='${classes.form} {{#if vertical}}${classes.vertical}{{/if}} '>
  {{#each fields}}
    {{ this }}
  {{/each}}
  {{ button }}
</form>`;
