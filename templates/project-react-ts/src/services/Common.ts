/**
 * @description 通用请求
 */
import axios from '../tool/http'

const prefix = '/api/common'

const isPre = process.env.LOGIN_ENV === 'pre'
const isDev = process.env.NODE_ENV === 'development'

/**
 * 获取用户信息
 * @returns Promise
 */
export async function getUserAuth() {
  return axios({
    url: `/api/common/getUserAuth`,
    method: 'get',
    errorTitle: '获取用户信息',
  })
}