import * as classes from './modal.module.scss';

export default `
<div class='${classes.modalShadow}{{#if isModalOpen}} ${classes.modalShadowOpen}{{/if}}'>
    <div class='${classes.modal}{{#if isModalOpen}} ${classes.modalOpen}{{/if}}' >
        {{ content }}
    </div>
<div>`;