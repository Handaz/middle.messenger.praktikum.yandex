import EventBus from '../modules/eventBus';
import { Indexed } from '../types';
import set from '../utils/functions/set';

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  }

  public empty() {
    this.state = {};
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
