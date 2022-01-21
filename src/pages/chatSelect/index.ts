import main from '../../layouts/main';
import systemMessage from './components/systemMessage';
import chats from '../../modules/chats';

const chatSelect = main.render({
  chats: chats(),
  content: systemMessage.render({
    message: 'Select a chat to start messaging',
  }),
});

const root = document.querySelector('#root');

if (root) {
  root.innerHTML = chatSelect;
}
