import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import EventBus from '../eventBus';
import { Indexed, Nullable } from '../../types';
import merge from '../../utils/functions/merge';
import isEqual from '../../utils/functions/isEqual';

type Events = typeof Block.EVENTS[keyof typeof Block.EVENTS];

type BlocksObject = Indexed<Block>;

type Children = Indexed<Block | Block[] | BlocksObject[]>;

export default class Block<P = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  children: Children;

  eventBus: EventBus<Events>;

  styles: Partial<CSSStyleDeclaration> | undefined;

  protected readonly props: P;

  private _template: string;

  private _id: Nullable<string>;

  private _element: Nullable<HTMLElement> = null;

  constructor(tmpl: string, propsAndChildren: Indexed) {
    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;

    this._template = tmpl;

    this._id = makeUUID();

    this.props = this._makePropsProxy(props);

    this.eventBus = new EventBus();

    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus<Events>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((subChild) => {
          if (this._isBlocksObject(subChild)) {
            Object.values(subChild).forEach((el) => {
              el.dispatchComponentDidMount();
            });
          } else {
            subChild.dispatchComponentDidMount();
          }
        });
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  componentDidMount(oldProps?: P) {
    this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, this.props);
  }

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: P, newProps: P) {
    if (!oldProps) {
      return true;
    }

    return !isEqual(oldProps, newProps);
  }

  setProps = (nextProps: Partial<P>) => {
    if (!nextProps) {
      return;
    }

    merge(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _addEvents() {
    const { events = {} } = this.props as Indexed;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props as Indexed;

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

  getPropsAndStubs(props: P): Indexed {
    const propsAndStubs: Indexed = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        propsAndStubs[key] = child.map((subChild) => {
          if (this._isBlocksObject(subChild)) {
            return Object.keys(subChild).reduce<Record<string, string>>(
              (acc, k) => {
                acc[k] = `<div data-id="${subChild[k]._id}"></div>`;
                return acc;
              },
              {},
            );
          }
          return `<div data-id="${subChild._id}"></div>`;
        });
      } else {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      }
    });

    return propsAndStubs;
  }

  substituteStubs(element: HTMLElement) {
    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((subChild) => {
          if (this._isBlocksObject(subChild)) {
            Object.keys(subChild).forEach((k) => {
              const block = subChild[k];
              const stub = element.querySelector(`[data-id="${block._id}"]`);

              if (!stub || !block.element) {
                return;
              }

              stub.replaceWith(block.element);
            });
          } else {
            const stub = element.querySelector(`[data-id="${subChild._id}"]`);

            if (!stub || !subChild.element) {
              return;
            }

            stub!.replaceWith(subChild.element);
          }
        });
      } else {
        const stub = element.querySelector(`[data-id="${child._id}"]`);

        if (!stub || !child.element) {
          return;
        }

        stub!.replaceWith(child.element);
      }
    });
  }

  setStyles(element: HTMLElement) {
    if (this.styles) {
      Object.entries(this.styles).forEach(
        ([k, val]: [k: string, val: string]) => {
          element.style.setProperty(k, val);
        },
      );
    }
  }

  compile(props: P): HTMLElement {
    const propsAndStubs: Indexed = this.getPropsAndStubs(props);

    const fragment = document.createElement('template');
    const render = Handlebars.compile(this._template, { noEscape: true });
    fragment.insertAdjacentHTML('afterbegin', render(propsAndStubs));

    const element = fragment.firstElementChild as HTMLElement;

    this.setStyles(element);

    this.substituteStubs(element);

    return element;
  }

  getContent() {
    return this.element;
  }

  _isBlocksObject(obj: Indexed): obj is BlocksObject {
    return Object.values(obj).every((val) => val instanceof Block);
  }

  _getChildren(propsAndChildren: Indexed): {
    children: Children;
    props: P;
  } {
    const children: Children = {};
    const props = {} as unknown as P;

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (this._isChild(value)) {
        children[key] = value;
      } else if (key === 'styles') {
        this.styles = value;
      } else {
        (props as Indexed)[key] = value;
      }
    });

    return { children, props };
  }

  _isChild(value: unknown) {
    return (
      value instanceof Block ||
      (Array.isArray(value) && value[0] instanceof Block) ||
      (Array.isArray(value) && value.every((el) => this._isBlocksObject(el)))
    );
  }

  _makePropsProxy(props: P): P {
    return new Proxy(props as unknown as object, {
      get: (target: Record<string, unknown>, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: Record<string, unknown>, prop: string, val) => {
        if (this._isChild(val)) {
          const oldChildren = { ...this.children };
          this.children[prop] = val;
          this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldChildren, this.children);
        } else {
          const oldProps = { ...target };
          target[prop] = val;
          this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        }

        return true;
      },
      deleteProperty: () => {
        throw new Error('Нет прав');
      },
    }) as unknown as P;
  }
}
