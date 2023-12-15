import { notification } from 'antd'
import { request, setter } from 'mobx-value'
import * as api from 'src/services/Demo'

export const count = setter<number>({
  value: 0,
})

export const someData = request({
  value: [] as any,
  request: async (params: Record<string, any>) => {
    const { data: result } = await api.getSomething(params)

    if (result?.code === 200) {
      const { data } = result
      return data
    }
    notification.error({ message: `${result.errorTitle}：${result.message}` })
    return []
  },
  autoRestoreOnBecomeUnobserved: true,
})
