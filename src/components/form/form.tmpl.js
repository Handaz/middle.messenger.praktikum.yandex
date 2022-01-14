import classes from './form.module.scss';

export default `<form class=${classes.form}>` +
  '{{#each fields}}' +
  '{{ this }}' +
  '{{/each}}' +
  '{{ button }}' +
  '</form>';
