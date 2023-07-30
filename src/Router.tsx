import { RootRoute, Route, Router, createHashHistory } from '@tanstack/router'

import { Empty } from './components/Empty'
import { Layout } from './containers/Layout'
import { Map } from './containers/Map'

const rootRoute = new RootRoute({
  component: Layout,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Empty />,
})

const mapsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'maps',
})

const mapDetailRoute = new Route({
  getParentRoute: () => mapsRoute,
  path: '$mapId',
  component: () => <Map />,
})

mapsRoute.addChildren([mapDetailRoute])

const routeTree = rootRoute.addChildren([indexRoute, mapsRoute])

const hashHistory = createHashHistory()

export const router = new Router({ routeTree, history: hashHistory })
