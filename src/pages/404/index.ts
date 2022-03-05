import Block from '../../modules/block';

import Link from '../../components/link';

import error from '../../layouts/error';
import { IError404 } from './types';

class Error404 extends Block<IError404> {
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
  url: '/',
  content: 'Back to main page',
});

export default new Error404({
  code: '404',
  text: 'Wrong path',
  link,
});
