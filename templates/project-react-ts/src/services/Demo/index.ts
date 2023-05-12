import axios from '../../tool/http'

const isPre = process.env.LOGIN_ENV === 'pre'
const isDev = process.env.NODE_ENV === 'development'

/**
 * 获取数据
 * @param params 参数
 * @returns Promise
 */
export async function getSomething(params: Record<string, any>) {
  return axios({
    url: `/api/xxx/xxx`,
    method: 'get',
    params,
    errorTitle: '获取数据',
  })
}
