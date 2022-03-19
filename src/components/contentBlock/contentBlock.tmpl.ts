export default `
<div class='{{ blockClasses.contentBlockClasses }}'>
  {{#if title}}<div class='{{ blockClasses.titleClass }}'>{{ title }}</div>{{/if}}
  <div class='{{ blockClasses.content }}'>{{ content }}</div>
  <div>{{ link }}</div>
</div>`;
