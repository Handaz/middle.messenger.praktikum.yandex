export default `
<div>
  <div>{{ topBar }}</div>
  <div class='{{ blockClasses.messages }}'>
    {{#if loader}}
      <div class='{{ blockClasses.loader }}'></div>
    {{/if}}
    {{#each messages}}
      {{ this }}
    {{/each}}
  </div>
  <div>{{ bottomBar }}</div>
</div>`;
