import React, { useEffect } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
// import { MainMod } from 'component/App/Mod'
import { router } from 'src/router'
import { BASE_ROUTE } from 'src/config'

import { getMenuByPathname } from '../../tool/getMenuByPathname'
import { menuList } from '../../component/App/Menu/store'

import s from './style.module.less'

export const Iframe = observer(() => {
  let currentMenu: any
  if (window.location.pathname.startsWith(`${BASE_ROUTE}/iframe/`)) {
    currentMenu = getMenuByPathname(window.location.pathname, toJS(menuList.value))
  }

  useEffect(() => {
    const iframe: any = document.getElementById('IframeWrap')
    iframe?.addEventListener('load', () => {
      iframe?.contentWindow?.postMessage(JSON.stringify(window.location), '*')
      iframe?.contentWindow?.postMessage(window.devicePixelRatio, '*')
    })
  }, [])

  return (
    // <MainMod>
    <iframe
      title="iframe"
      id="IframeWrap"
      width="100%"
      height="100%"
      src={currentMenu && currentMenu.url}
      className={s.box}
      loading="lazy"
    />
    // </MainMod>
  )
})

export default Iframe
