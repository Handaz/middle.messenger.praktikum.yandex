import Block from '../../modules/block';
import defaultClick from './utils';
import template from './link.tmpl';
import { ILink } from './types';
import classNames from '../../utils/functions/classnames';
import classes from './link.module.scss';

export default class Link extends Block<ILink> {
  constructor(props: ILink) {
    const { events } = props;
    super(template, {
      ...props,
      events: events
        ? { ...events, click: events.click ?? defaultClick }
        : { click: defaultClick },
    });
  }

  render() {
    const { url, content } = this.props;

    const blockClasses = classNames(classes.link);

    return this.compile({
      url,
      content,
      blockClasses,
    });
  }
}
