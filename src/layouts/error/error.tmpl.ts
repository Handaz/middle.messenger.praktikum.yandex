import classes from './error.module.scss';

export default `
<main class=${classes.main}>
    <div class=${classes.error}>
        <div>{{ code }}</div>
        <div>{{ text }}</div>
    </div>
    <div>{{ link }}</div>
</main>`;
