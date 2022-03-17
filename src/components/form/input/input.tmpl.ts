export default `
<input 
    class='{{ blockClasses }}' 
    type='{{ type }}'
    name='{{ name }}' 
    placeholder='{{ placeholder }}'
    value='{{ value }}'
    {{#if noautocomplete}}autocomplete="off"{{/if}}
/>
`;
