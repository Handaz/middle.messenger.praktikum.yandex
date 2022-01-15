import Handlebars from 'handlebars';
import profile from '../../layouts/profile';

const login = profile.render({
  sidebar: 'sidebar',
  content: 'content',
});

document.querySelector('#root').innerHTML = login;
