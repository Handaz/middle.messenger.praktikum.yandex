export default `
<div class='{{ blockClasses.info }}'>
    <div class='{{ blockClasses.chat }}'>
        <div class='{{ blockClasses.avatar }}'>
            {{ avatar }} 
        </div>
        <div class='{{ blockClasses.title }}'>
            {{ title }}
        </div>
    </div>
    <div class='{{ blockClasses.button }}'> 
    {{ button }}
    </div>
    {{ modal }}
</div>`;
