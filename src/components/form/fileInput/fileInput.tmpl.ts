export default `
<div>
    <label class='{{ blockClasses.label }}' for='{{ name }}'>{{ label }}</label>
    <input 
        class='{{ blockClasses.input }}' 
        type='file'
        name='{{ name }}'
        id='{{ name }}'
    />
</div>
`;
