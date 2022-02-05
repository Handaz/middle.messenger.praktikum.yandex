import * as classes from './input.module.scss';

export default `
<div class=${classes.wrapper}>
<input class='${classes.input} {{#if error}}${classes.inputError}{{/if}}' type="{{ type }}" name="{{ name }}" placeholder="{{ placeholder }}" />
{{#if error}}<div class=${classes.error}>{{ error }}</div>{{/if}}
</div>
`;
