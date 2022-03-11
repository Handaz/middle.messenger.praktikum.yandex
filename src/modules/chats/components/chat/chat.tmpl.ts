export default `
<li class='{{ blockClasses.chat }}'>
  <div class='{{ blockClasses.avatar}}'>{{ avatar }}</div>
  <div class='{{ blockClasses.chatInfo }}'>
    <div> {{ title }} </div>
    <div class='{{ blockClasses.messageInfo }}'>
      {{#if sender}} <span class='{{ blockClasses.sender }}'>{{ sender }}:</span> {{/if}}
      <span class='{{ blockClasses.message }}'>{{ message }}</span>
    </div>
  </div>
  <div>
    <div> {{ time }} </div>
    {{#if unread}} <div> {{ unread }} </div> {{/if}}
  </div>
</li>`;
