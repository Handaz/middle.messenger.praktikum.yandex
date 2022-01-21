import main from '../../layouts/main';
import { chats } from '../../modules/chats';
import { conversation } from './modules/conversation';

const chatSelected = main.render({
  chats: chats(),
  content: conversation(),
});

const root = document.querySelector('#root');

if (root) {
  root.innerHTML = chatSelected;
}
