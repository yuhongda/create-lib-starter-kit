import type { Routes, Route } from 'src/lib/Router'
import { lazy } from 'react'

const Abnormal = lazy(() => import(/* webpackChunkName: "ErrorPage" */ 'src/component/Abnormal'))
const Iframe = lazy(() => import(/* webpackChunkName: "Iframe" */ 'src/component/Iframe'))
const MicroApp = lazy(() => import(/* webpackChunkName: "MicroApp" */ 'src/component/MicroApp'))

const Demo = lazy(() => import(/* webpackChunkName: "Demo" */ 'src/page/Demo'))

interface ExtendsRoute extends Route {
  keepAlive?: boolean
}
type ExtendsRoutes = ExtendsRoute[]

export const routes: ExtendsRoutes = [
  /**
   * @description: iframe-看板使用
   * @return {*}
   */
  {
    key: 'iframe',
    component: Iframe,
    path: '/data-insight/iframe/:name',
  },
  /**
   * @description: 微前端-单页面
   * @return {*}
   */
  {
    key: 'microApp',
    component: MicroApp,
    path: '/data-insight/microapp/:name',
  },
  {
    key: '500',
    path: '/data-insight/500',
    exact: true,
    component: Abnormal,
  },
  {
    key: 'NoAuthority',
    path: '/data-insight/NoAuthority',
    exact: true,
    component: Abnormal,
  },
  {
    key: '503',
    path: '/data-insight/503',
    exact: true,
    component: Abnormal,
  },
  {
    key: 'NoData',
    path: '/data-insight/NoData',
    exact: true,
    component: Abnormal,
  },
  {
    key: '/Demo',
    component: Demo,
    path: '/Demo',
  },
]
