export default `
<div class='{{ blockClasses.messages }}'>
  {{#if loader}}
    {{ loaderComponent }}
  {{ else }}
    {{#each messages}}
      {{ this }}
    {{/each}}
  {{/if}}
</div>`;
