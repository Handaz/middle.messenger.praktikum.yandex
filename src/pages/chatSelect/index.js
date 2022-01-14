import Handlebars from 'handlebars';
import main from '../../layouts/main';
import { chats } from '../../modules/chats';

const chatSelect = main.render({
  chats: chats(),
  content: 'content',
});

document.querySelector('#root').innerHTML = chatSelect;
