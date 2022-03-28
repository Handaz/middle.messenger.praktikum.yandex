export default `
<div class='{{ blockClasses.chats }}'>
  <div class='{{ blockClasses.header }}'>
    <div>{{ profile }}</div>
    <div class='{{ blockClasses.searchWrapper }}'>{{ search }}</div>
    <div class='{{ blockClasses.chatAdd }}'>{{ chatAdd }}</div>
    <div>{{ modal }}</div>
  </div>
    {{#if loader}}
      {{ loaderComponent }}
    {{ else }}
      <ul class='{{ blockClasses.chatList }}'>
        {{#each chatList}}
          {{ this }}
        {{/each}}
        <div class='{{ blockClasses.loadChats }}'>{{ loadChats }}</div>
      </ul>
    {{/if}}
</div>`;
