export default `
<div class='{{ blockClasses.message }}'>
  {{ content }}
  <div class='{{ blockClasses.info }}'>
    {{#if status}}<div class='{{ blockClasses.status }}'>{{ status }}</div>{{/if}}
    <div>{{ time }}</div>
  </div>
</div>`;
