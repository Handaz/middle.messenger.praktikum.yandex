import Block from '../../modules/block';

import Link from '../../components/link';

import error from '../../layouts/error';
import { IError404 } from './types';
import render from '../../utils/renderDom';

class Error404 extends Block {
  constructor(props: IError404) {
    super(error.template, props);
  }

  render() {
    const { code, text, link } = this.props;

    return this.compile({
      code,
      text,
      link,
    });
  }
}

const link = new Link({
  url: 'chatSelect.html',
  content: 'Back to chats',
});

const content = new Error404({
  code: '404',
  text: 'Wrong path',
  link,
});

render('#root', content);

// import error from '../../layouts/error';
// import link from '../../components/link';

// const notFoundError = error.render({
//   code: '404',
//   text: 'Wrong path',
//   link: link.render({ url: 'chatSelect.html', content: 'Back to chats' }),
// });

// const root = document.querySelector('#root');

// if (root) {
//   root.innerHTML = notFoundError;
// }
