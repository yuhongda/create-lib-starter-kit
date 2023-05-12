import type { ServerOptions } from 'vite'

export const devHost = 'http://backend.example.com/'

// 增加项目mock请求
export const PROXY_TARGET = process.env.MOCK ? 'http://dev-insight.example.com:3010' : devHost

export const proxy: ServerOptions['proxy'] = {
  '/api': {
    target: PROXY_TARGET,
    secure: false,
    changeOrigin: true,
    headers: {
      Origin: PROXY_TARGET,
    },
  },
}
