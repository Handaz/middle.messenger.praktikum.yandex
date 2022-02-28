import * as classes from './chat.module.scss';

export default `
<li class=${classes.chat}>
  <div>{{ avatar }}</div>
  <div>
    <div> {{ title }} </div>
    <div>
      {{#if sender}} <div> {{ sender }} </div> {{/if}}
      <div> {{ message }} </div>
    </div>
  </div>
  <div>
    <div> {{ time }} </div>
    {{#if unread}} <div> {{ unread }} </div> {{/if}}
  </div>
</li>`;
