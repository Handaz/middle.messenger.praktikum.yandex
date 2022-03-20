export default `
<div class='{{ blockClasses.chats }}'>
  <div class='{{ blockClasses.header }}'>
    <div>{{ profile }}</div>
    <div class='{{ blockClasses.searchWrapper }}'>{{ search }}</div>
    <div class='{{ blockClasses.chatAdd }}'>{{ chatAdd }}</div>
    <div>{{ modal }}</div>
  </div>
  <div>
    {{#if loader}}
      {{ loaderComponent }}
    {{ else }}
      <ul>
        {{#each chatList}}
          {{ this }}
        {{/each}}
      </ul>
    {{/if}}
  </div>
</div>`;
