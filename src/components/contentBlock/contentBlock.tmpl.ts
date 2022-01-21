import classes from './contentBlock.module.scss';

export default `<div class=${classes.contentBlock}>` +
  `<div class=${classes.title}> {{ title }} </div>` +
  '{{ content }}' +
  '</div>';
