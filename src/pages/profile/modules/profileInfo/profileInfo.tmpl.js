import classes from './profileInfo.module.scss';

export default `<div>{{ avatar }}</div>` +
  `<div class=${classes.username}>{{ username }} </div>` +
  `<div class=${classes.infoFields}>` +
  '{{#each profileFields}}' +
  `<div class=${classes.infoField}>` +
  '<div>{{ this.label }}</div>' +
  '<div>{{ this.value }}</div>' +
  '</div>' +
  '{{/each}}' +
  '</<div>' +
  '<div>' +
  '{{#each links}}' +
  '{{this}}' +
  '{{/each}}' +
  '</div>';
