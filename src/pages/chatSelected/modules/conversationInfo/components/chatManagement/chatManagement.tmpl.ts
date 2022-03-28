export default `
<div
    class='{{ blockClasses.management }}'
>   
    <div class='{{ blockClasses.main }}'>
        <div class='{{ blockClasses.avatar }}'>
            {{ avatar }}
        </div>
        <div class='{{ blockClasses.info }}'>
            <div class='{{ blockClasses.title }}'>
                {{ title }}
            </div>
            <div class='{{ blockClasses.membersCount }}'>
                {{ membersCount }} members
            </div>
        </div>
    </div>
    {{ members }}
</div>
`;
