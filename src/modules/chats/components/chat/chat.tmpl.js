import classes from './chat.module.scss';

export default `<li class=${classes.chat}>` +
  '<div>{{ avatar }}</div>' +
  '<div>' +
  '<div> {{ username }} </div>' +
  '<div>' +
  '<span> {{ sender }} </span>' +
  '<span> {{ message }} </span>' +
  '</div>' +
  '</div>' +
  '<div>{{ time }}</div>' +
  '</li>';
