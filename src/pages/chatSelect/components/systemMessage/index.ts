import Block from '../../../../modules/block';
import template from './systemMessage.tmpl';
import { ISystemMessage } from './types';

export default class SystemMessage extends Block {
  constructor(props: ISystemMessage) {
    super(template, props);
  }

  render() {
    const { message } = this.props;

    return this.compile({ message });
  }
}
