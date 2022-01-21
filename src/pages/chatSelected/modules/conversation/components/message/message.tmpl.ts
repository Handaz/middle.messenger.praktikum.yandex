import * as classes from './message.module.scss';

export default `
<div class="${classes.message} {{#if own}} ${classes.ownMessage} {{else}} ${classes.incomingMessage} {{/if}}">
  <div>{{ content }}</div>
  {{#if status}}<div>{{ status }}</div>{{/if}}
  <div>{{ time }}</div>
</div>`;
