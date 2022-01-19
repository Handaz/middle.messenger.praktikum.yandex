import error from '../../layouts/error';
import link from '../../components/link';

const notFoundError = error.render({
  code: '404',
  text: 'Wrong path',
  link: link.render({ url: 'chatSelect.html', content: 'Back to chats' }),
});

document.querySelector('#root').innerHTML = notFoundError;
