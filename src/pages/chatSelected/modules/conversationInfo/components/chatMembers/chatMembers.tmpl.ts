import * as classes from './chatMembers.module.scss';

export default `
<div
    class=${classes.members}
>
    {{ form }}
    {{#each members}}
        {{ this }}
    {{/each}}
</div>
`;
