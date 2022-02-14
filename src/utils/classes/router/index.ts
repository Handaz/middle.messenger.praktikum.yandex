import Block from '../../../modules/block';
import Route from '../route';

export default class Router {
  routes: Route[] = [];

  history = window.history;

  private __instance: Router | null;

  private _currentRoute: Route | null;

  private _rootQuery = '';

  private constructor(rootQuery: string) {
    this._rootQuery = rootQuery;
  }

  getInstance(): Router {
    if (!this.__instance) {
      this.__instance = new Router('#root');
    }

    return this.__instance;
  }

  use(pathname: string, block: Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event) => {
      const target = event.currentTarget as Window;

      if (!target) {
        return;
      }

      this._onRoute(target.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
