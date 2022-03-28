export default `
<div class='{{ blockClasses.message }}'>
  {{#if filePath}}
    <img src='{{ filePath }}' />
  {{ else }}
    {{ content }}
  {{/if}}
  <div class='{{ blockClasses.info }}'>
    {{#if status}}<div class='{{ blockClasses.status }}'>{{ status }}</div>{{/if}}
    <div>{{ time }}</div>
  </div>
</div>`;
