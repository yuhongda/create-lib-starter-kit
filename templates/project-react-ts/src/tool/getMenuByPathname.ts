import type { MenuData } from '../component/App/Menu/type'

/**
 * 通过 pathname 查找当前菜单项
 */
export const getMenuByPathname = (pathname: string, menusTree: MenuData[]): MenuData => {
  // eslint-disable-next-line
  for(const t of menusTree){
    if (t.uri === pathname) {
      return t
    }
    if (t.children) {
      const menu = getMenuByPathname(pathname, t.children)
      if (menu.name) {
        return menu
      }
    }
  }
  return {} as MenuData
}
