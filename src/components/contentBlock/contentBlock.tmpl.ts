export default `
<div class='{{ blockClasses.contentBlockClasses }}'>
  <div class='{{ blockClasses.content }}'>
  {{#if title}}<div class='{{ blockClasses.titleClass }}'>{{ title }}</div>{{/if}}
    {{ content }}
  {{#if link}}<div class='{{ blockClasses.link }}'>{{ link }}</div>{{/if}}
  </div>
</div>`;
