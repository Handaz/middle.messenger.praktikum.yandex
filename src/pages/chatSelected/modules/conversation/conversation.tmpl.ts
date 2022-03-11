export default `
<div>
  <div>{{ topBar }}</div>
  <div class='{{ blockClasses.messages }}'>
    {{#each messages}}
      {{ this }}
    {{/each}}
  </div>
  <div>{{ bottomBar }}</div>
</div>`;
