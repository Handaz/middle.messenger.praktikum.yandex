import * as classes from './chat.module.scss';

export default `
<li class=${classes.chat}>
  <div>{{ avatar }}</div>
  <div>
    <div> {{ title }} </div>
    <div>
      {{#if sender}} <span> {{ sender }} </span> {{/if}}
      <span> {{ message }} </span>
    </div>
  </div>
  <div>{{ time }}</div>
</li>`;
