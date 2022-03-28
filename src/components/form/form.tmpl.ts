export default `
<form class='{{ blockClasses.form }}' novalidate>
  {{#each fields}}
    <div class='{{ ../blockClasses.inputWrapper }}'>
      {{ this.input }}
      {{#if this.label}} {{ this.label }} {{/if}}
      {{#if this.error}} {{ this.error }} {{/if}}
    </div>
  {{/each}}
  {{ button }}
</form>`;
