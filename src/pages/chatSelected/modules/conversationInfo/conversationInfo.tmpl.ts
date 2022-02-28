import * as classes from './conversationInfo.module.scss';

export default `
<div class=${classes.info}>
    <div class=${classes.user}>
        {{ avatar }} 
        {{ username }}
    </div> 
    {{ button }}
    {{ modal }}
</div>`;
