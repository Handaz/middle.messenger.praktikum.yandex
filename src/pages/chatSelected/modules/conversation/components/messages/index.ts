import Block from '../../../../../../modules/block';
import template from './messages.tmpl';
import { IMessages } from './types';
import classes from './messages.module.scss';

export default class Messages extends Block<IMessages> {
  constructor(props: IMessages) {
    super(template, props);
  }

  render() {
    const { messages, loader, loaderComponent } = this.props;

    const blockClasses = {
      messages: classes.messages,
    };

    return this.compile({
      messages,
      loader,
      loaderComponent,
      blockClasses,
    });
  }
}
