import Handlebars from 'handlebars';
import main from '../../layouts/main';
import { chats } from '../../modules/chats';
import { conversation } from './modules/conversation';

const chatSelect = main.render({
  chats: chats(),
  content: conversation(),
});

document.querySelector('#root').innerHTML = chatSelect;
