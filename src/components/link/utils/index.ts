import Router from '../../../utils/classes/router';

const defaultClick = (e: MouseEvent) => {
  e.preventDefault();
  const target = e.currentTarget as HTMLAnchorElement;
  if (!target) {
    throw new Error('Provide anchor');
  }
  Router.go(target.pathname);
};

export default defaultClick;
