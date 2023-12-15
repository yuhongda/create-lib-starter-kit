import type { Routes, Route } from 'src/lib/Router'
import { lazy } from 'react'

const Abnormal = lazy(() => import(/* webpackChunkName: "ErrorPage" */ 'src/component/Abnormal'))
const Iframe = lazy(() => import(/* webpackChunkName: "Iframe" */ 'src/component/Iframe'))
const MicroApp = lazy(() => import(/* webpackChunkName: "MicroApp" */ 'src/component/MicroApp'))

const Demo = lazy(() => import(/* webpackChunkName: "Demo" */ 'src/page/Demo'))
const Demo1 = lazy(() => import(/* webpackChunkName: "Demo1" */ 'src/page/Demo1'))

export const routes: Route[] = [
  /**
   * @description: iframe-看板使用
   * @return {*}
   */
  {
    key: 'iframe',
    element: <Iframe />,
    path: '/data-insight/iframe/:name',
  },
  /**
   * @description: 微前端-单页面
   * @return {*}
   */
  {
    key: 'microApp',
    element: <MicroApp />,
    path: '/data-insight/microapp/:name',
  },
  {
    key: '500',
    path: '/data-insight/500',
    element: <Abnormal />,
  },
  {
    key: 'NoAuthority',
    path: '/data-insight/NoAuthority',
    element: <Abnormal />,
  },
  {
    key: '503',
    path: '/data-insight/503',
    element: <Abnormal />,
  },
  {
    key: 'NoData',
    path: '/data-insight/NoData',
    element: <Abnormal />,
  },
  {
    key: '/Demo',
    element: <Demo />,
    path: '/Demo',
  },
  {
    key: '/Demo1',
    element: <Demo1 />,
    path: '/Demo1',
  },
]
