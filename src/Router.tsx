import {
  RootRoute,
  Route,
  Router,
  createHashHistory,
} from '@tanstack/react-router';

import { Empty } from './components/Empty';
import { Dynmap } from './containers/Dynmap';
import { Layout } from './containers/Layout';

const rootRoute = new RootRoute({
  component: Layout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Empty />,
});

const mapsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'maps',
});

const mapDetailRoute = new Route({
  getParentRoute: () => mapsRoute,
  path: '$mapId',
  component: () => <Dynmap />,
});

mapsRoute.addChildren([mapDetailRoute]);

const routeTree = rootRoute.addChildren([indexRoute, mapsRoute]);

const hashHistory = createHashHistory();

export const router = new Router({ routeTree, history: hashHistory });
