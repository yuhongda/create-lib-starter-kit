import React from 'react'
import type { RouteComponentProps } from 'react-router'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
// import { MainMod } from 'component/App/Mod'

import { BASE_ROUTE } from 'src/config'

import { getMenuByPathname } from '../../tool/getMenuByPathname'
import { menuList } from '../../component/App/Menu/store'

export const MicroApp: React.FC<RouteComponentProps<{ name: string }>> = observer(props => {
  const { match } = props
  let currentMenu: any
  if (window.location.pathname.startsWith('/microapp/')) {
    currentMenu = getMenuByPathname(window.location.pathname + window.location.search, toJS(menuList.value))
  }

  return (
    <div style={{ height: '100%' }}>
      <micro-app
        name={`microapp-${match.params?.name}`}
        url={currentMenu && currentMenu.url}
        // baseroute={`/microapp/${match.params?.name}`}
        baseroute={`${BASE_ROUTE}/microapp`}
        // shadowDOM
        // inline
        style={{ height: '100%' }}
      />
    </div>
  )
})

export default MicroApp
