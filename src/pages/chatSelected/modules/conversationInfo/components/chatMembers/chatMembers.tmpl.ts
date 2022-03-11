export default `
<div
    class='{{ blockClasses.members }}'
>
    {{ form }}
    {{#each members}}
        {{ this }}
    {{/each}}
</div>
`;
