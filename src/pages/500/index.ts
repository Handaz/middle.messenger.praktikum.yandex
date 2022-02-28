import Block from '../../modules/block';

import Link from '../../components/link';

import error from '../../layouts/error';
import { IError500 } from './types';

class Error500 extends Block<IError500> {
  constructor(props: IError500) {
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

export default new Error500({
  code: '500',
  text: 'We are fixing it',
  link,
});
