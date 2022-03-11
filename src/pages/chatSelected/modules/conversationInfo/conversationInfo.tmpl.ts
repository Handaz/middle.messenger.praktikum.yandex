export default `
<div class='{{ blockClasses.info }}'>
    <div class='{{ blockClasses.user }}'>
        <div class='{{ blockClasses.avatar }}'>
            {{ avatar }} 
        </div>
        <div>
            {{ title }}
        </div>
    </div> 
    {{ button }}
    {{ modal }}
</div>`;
