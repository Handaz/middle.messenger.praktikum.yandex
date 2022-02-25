import Block from '../../modules/block';
import defaultClick from './utils';
import template from './link.tmpl';
import { ILink } from './types';

export default class Link extends Block<ILink> {
  constructor(props: ILink) {
    const { events } = props;
    super(template, {
      ...props,
      events: events
        ? { ...events, click: events.click ?? defaultClick }
        : defaultClick,
    });
  }

  render() {
    const { url, content } = this.props;

    return this.compile({
      url,
      content,
    });
  }
}
