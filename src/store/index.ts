import EventBus from '../modules/eventBus';

// TODO: RETURN AND MAKE TYPES
export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    console.log(path, value);
    // set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
