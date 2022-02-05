export default `
<div>
<input type="{{ type }}" name="{{ name }}" placeholder="{{ placeholder }}" />
{{#if error}}<div>{{ error }}</div>{{/if}}
</div>
`;
