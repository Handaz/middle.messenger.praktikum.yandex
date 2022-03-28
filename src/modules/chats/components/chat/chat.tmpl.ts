export default `
<li class='{{ blockClasses.chat }}'>
  <div class='{{ blockClasses.chatInfo }}'>
    <div class='{{ blockClasses.avatar}}'>{{ avatar }}</div>
    <div class='{{ blockClasses.messageInfo }}'>
      <div class='{{ blockClasses.title }}'> {{ title }} </div>
      <div class='{{ blockClasses.messageContent }}'>
        {{#if sender}} <span class='{{ blockClasses.sender }}'>{{ sender }}:</span> {{/if}}
        <span class='{{ blockClasses.message }}'>{{ message }}</span>
      </div>
    </div>
  </div>
  <div class='{{ blockClasses.metaInfo }}'>
    <div class='{{ blockClasses.time }}'> {{ time }} </div>
    {{#if unread}} <div class='{{ blockClasses.unread }}'> {{ unread }} </div> {{/if}}
  </div>
</li>`;
