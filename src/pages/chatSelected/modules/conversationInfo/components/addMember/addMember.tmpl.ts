export default `
<div
    class='{{ blockClasses.addMember }}'
>   
    <div class='{{ blockClasses.head }}'>
        {{ button }}
        <div class='{{ blockClasses.title }}'>
            Add member
        </div>
    </div>
    <div>
        {{ form }}
    </div>
    {{#if users}}
        <div class='{{ blockClasses.users }}'>
            {{#each users}}
                {{ this }}
            {{/each}}
        </div>
    {{/if}}
</div>
`;
