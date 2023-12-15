import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/lib/locale/zh_CN'
import * as React from 'react'
import { DevicePixelRatio } from 'src/devicePixelRadio'
import { inIframe } from 'tool/InIframe'

import { Layout } from './Layout'
import { listen } from './emitter'

dayjs.locale('zh-cn')

export const App = () => {
  // 处理window兼容问题
  React.useEffect(() => {
    DevicePixelRatio.init()
  }, [])

  React.useEffect(listen, [])
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#3d5cfc',
        },
      }}
    >
      <Layout />
    </ConfigProvider>
  )
}
