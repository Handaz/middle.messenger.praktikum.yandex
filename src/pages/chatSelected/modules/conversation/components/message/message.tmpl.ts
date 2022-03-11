export default `
<div class='{{ blockClasses.message }}'>
  <div class='{{ blockClasses.content }}'>{{ content }}</div>
  <div class='{{ blockClasses.info }}'>
    {{#if status}}<div>{{ status }}</div>{{/if}}
    <div>{{ time }}</div>
  </div>
</div>`;
