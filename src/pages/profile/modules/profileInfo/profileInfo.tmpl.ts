export default `
<div>
  <div class='{{ blockClasses.avatarWrapper }}'>
    <div class='{{ blockClasses.avatarField }}'>Change avatar</div>
    <div class='{{ blockClasses.avatar }}'>{{ avatar }}</div>
  </div>
  {{ modal }}
  <div>{{ username }}</div>
  <div class='{{ blockClasses.infoFields }}'>
    {{#each profileFields}}
      <div class='{{ ../blockClasses.infoField }}'>
        <div>{{ this.label }}</div>
        <div>{{ this.value }}</div>
      </div>
    {{/each}}
  </div>
  <div>
    <div class='{{ blockClasses.links }}'>
      {{#each links}}
        {{this}}
      {{/each}}
    </div>
  </div>
</div>`;
