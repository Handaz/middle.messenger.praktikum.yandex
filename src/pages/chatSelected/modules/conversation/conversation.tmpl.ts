export default `
<div>
  <div>{{ topBar }}</div>
  <div class='{{ blockClasses.messages }}'>
    {{#if loader}}
      {{ loaderComponent }}
    {{ else }}
      {{#each messages}}
        {{ this }}
      {{/each}}
    {{/if}}
  </div>
  <div>{{ bottomBar }}</div>
</div>`;
