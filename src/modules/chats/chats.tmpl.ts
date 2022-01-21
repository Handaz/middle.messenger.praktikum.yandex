import classes from './chats.module.scss';

export default `<div class=${classes.chats}>` +
  `<div class=${classes.header}>` +
  '<div>{{ profile }}</div>' +
  '<div>{{ search }}</div>' +
  '</div>' +
  '<div>' +
  '<ul>' +
  '{{#each chatList}}' +
  '{{ this }}' +
  '{{/each}}' +
  '</ul>' +
  '</div>' +
  '</div>';
