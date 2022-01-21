import error from '../../layouts/error';
import link from '../../components/link';

const serverDownError = error.render({
  code: '500',
  text: 'We are fixing it',
  link: link.render({ url: 'chatSelect.html', content: 'Back to chats' }),
});

const root = document.querySelector('#root');

if (root) {
  root.innerHTML = serverDownError;
}
