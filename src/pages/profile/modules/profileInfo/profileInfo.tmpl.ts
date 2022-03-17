export default `
<div class='{{ blockClasses.profileInfo }}'>
  <div class='{{ blockClasses.avatarWrapper }}'>
    <div class='{{ blockClasses.avatar }}'>{{ avatar }}</div>
    <div class='{{ blockClasses.avatarField }}'>Change avatar</div>
    <div class='{{ blockClasses.username }}'>{{ username }}</div>
  </div>
  {{ modal }}
  <div class='{{ blockClasses.infoFields }}'>
    {{#each profileFields}}
      <div class='{{ ../blockClasses.infoField }}'>
        <div>{{ this.label }}</div>
        <div class='{{ ../blockClasses.fieldValue }}'>{{ this.value }}</div>
      </div>
    {{/each}}
  </div>
  <div class='{{ blockClasses.links }}'>
    {{#each links}}
      <div class='{{ ../blockClasses.link }}'>
        {{this}}
      </div>
    {{/each}}
  </div>
</div>`;
