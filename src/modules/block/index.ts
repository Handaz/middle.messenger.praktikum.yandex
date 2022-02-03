import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import { Nullable } from '../../types';
import EventBus from '../eventBus';

type Events = typeof Block.EVENTS[keyof typeof Block.EVENTS];

export default class Block<P = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  children: Record<string, Block>;

  eventBus: () => EventBus<Events>;

  protected readonly props: P;

  private _template: string;

  private _id: Nullable<string>;

  private _element: Nullable<HTMLElement> = null;

  constructor(tmpl: string, propsAndChildren: Record<string, Block | any>) {
    const eventBus = new EventBus();
    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;

    this._template = tmpl;

    this._id = makeUUID();

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus<Events>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount(oldProps?: P) {
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, this.props);
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: P, newProps: P) {
    if (!oldProps) {
      return true;
    }

    const updatedProp = Object.keys(newProps).find(
      (prop) =>
        (oldProps as Record<string, any>)[prop] === undefined ||
        (oldProps as Record<string, any>)[prop] !==
          (newProps as Record<string, any>)[prop],
    );

    return !!updatedProp;
  }

  setProps = (nextProps: Partial<P>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _addEvents() {
    const { events = {} } = this.props as unknown as Record<string, any>;

    if (!this._element) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      this._element!.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props as unknown as Record<string, any>;

    if (!this._element) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      this._element!.removeEventListener(eventName, events[eventName]);
    });
  }

  _render() {
    const element = this.render();

    this._removeEvents();

    if (!this._element) {
      this._element = element;
    } else {
      this._element.replaceWith(element);

      this._element = element;
    }

    this._addEvents();
  }

  render(): HTMLElement {
    return new HTMLElement();
  }

  compile(props: P): HTMLElement {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      (propsAndStubs as Record<string, any>)[
        key
      ] = `<div data-id="${child._id}"></div>`;
    });

    const fragment = document.createElement('template');

    const render = Handlebars.compile(this._template, { noEscape: true });
    fragment.insertAdjacentHTML('afterbegin', render(propsAndStubs));

    const element = fragment.firstElementChild as HTMLElement;

    Object.values(this.children).forEach((child) => {
      const stub = element.querySelector(`[data-id="${child._id}"]`);

      if (!stub || !child.element) {
        return;
      }

      stub!.replaceWith(child.element);
    });

    return element;
  }

  getContent() {
    return this.element;
  }

  _getChildren(propsAndChildren: Record<string, any | Block>): {
    children: Record<string, Block>;
    props: P;
  } {
    const children: Record<string, Block> = {};
    const props: P = {} as unknown as P;

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        value.forEach((el: Block, index) => {
          children[`child${index}`] = el;
        });
      } else {
        (props as Record<string, any>)[key] = value;
      }
    });

    return { children, props };
  }

  _makePropsProxy(props: P): P {
    const self = this;

    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, val) {
        const oldProps = { ...target };
        target[prop] = val;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет прав');
      },
    }) as unknown as P;
  }

  show() {
    if (!this._element) {
      return;
    }

    this._element.style.display = 'block';
  }

  hide() {
    if (!this._element) {
      return;
    }

    this._element.style.display = 'none';
  }
}
