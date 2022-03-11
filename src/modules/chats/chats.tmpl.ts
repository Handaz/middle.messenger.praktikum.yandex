export default `
<div class='{{ blockClasses.chats }}'>
  <div class='{{ blockClasses.header }}'>
    <div>{{ profile }}</div>
    <div>{{ search }}</div>
    <div>{{ chatAdd }}</div>
    <div>{{ modal }}</div>
  </div>
  <div>
    <ul>
      {{#each chatList}}
      {{ this }}
      {{/each}}
    </ul>
  </div>
</div>`;
