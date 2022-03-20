export default `
<div
    class='{{ blockClasses.membersWrapper }}'
>   
    <div class='{{ blockClasses.head }}'>
        <div class='{{ blockClasses.title }}'>Members</div>
        {{ button }}
    </div>
    <div class='{{ blockClasses.members}}'>
        {{#each members}}
            {{ this }}
        {{/each}}
    </div>
</div>
`;
