import { mobxRequest } from 'mobx-value'
import { getUserAuth, getUserAuthInsightTrend } from 'src/services/Common'
// import { initStream } from 'src/tool/stream'
import { getUrlSearchValue } from 'src/tool/utils'
import microApp from '@micro-zoe/micro-app'
import localforage from 'localforage'

// import { userAuth } from '../../../mock/json/common'

import { router } from 'src/router'
import { BASE_ROUTE } from 'src/config'

import { getAuthFirstMenu, setMenuList } from './Menu/store'

export const userInfo = mobxRequest({
  value: {
    user: null as Record<string, any> | null,
    modules: [] as Record<string, any>[],
    menus: [] as Record<string, any>[],
    dimVo: [] as Record<string, any>,
  },
  request: async () => {
    const { pathname } = window.location

    // const res = await getUserAuth()
    // const result = res?.data

    // 开发环境
    // const isLocalMock = () => result.data.user.admin && getUrlSearchValue('dev')
    // const isLocalMock = true

    // if (result && result.code === 200) {
    // const { data } = result

    const mockMenu = [
      {
        code: '/Demo',
        name: 'Demo',
        uri: '/Demo',
        url: '/Demo',
        isShow: true,
      },
      {
        code: '/Demo1',
        name: 'Demo1',
        uri: '/Demo1',
        url: '/Demo1',
        isShow: true,
      },
    ]
    setMenuList(mockMenu)

    // 获取第一个菜单
    // getAuthFirstMenu()

    // 无菜单跳转503
    // if (data.menus?.length === 0) {
    //   router.push(`${BASE_ROUTE}/503?referer=${window.location.pathname.split('/')[2]}`)
    // }

    return {
      user: {},
      modules: {},
      menus: mockMenu,
    }
    // }
    return {
      user: {} as Record<string, any>,
      modules: [] as Record<string, any>[],
      menus: [] as Record<string, any>[],
    }
  },
})

export function isAuth(code: string) {
  return userInfo.value.modules.filter((item: any) => item.code === code).length > 0
}
