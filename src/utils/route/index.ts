import pagesJson from '@/pages.json'
import type { Route } from '@/typings/route'

const { pages, tabBar, subPackages } = pagesJson

// 将pages.json转换成Map对象,path为key
const pagesMap = new Map<string, Route>()

pages.forEach((page) => {
  pagesMap.set(page.path, page as Route)
})

if (Array.isArray(subPackages) && subPackages.length) {
  subPackages.forEach((el) => {
    const rootPath = el.root
    // @ts-ignore
    el.pages.forEach((page) => {
      page.path = `/${rootPath}/${page.path}`
      pagesMap.set(page.path, page as Route)
    })
  })
}

if (tabBar) {
  const tabBarList = tabBar.list
  if (Array.isArray(tabBarList)) {
    tabBarList.forEach((el) => {
      if (pagesMap.has(el.pagePath)) {
        const page = pagesMap.get(el.pagePath)
        const meta = page?.meta || {}
        // @ts-ignore
        meta.tabBar = true
        // @ts-ignore
        page.meta = Object.assign({}, meta)
        pagesMap.set(`/${el.pagePath}`, page as Route)
      }
    })
  }
}

// 判断是否为 tabBar
const isTabBar = (path: string) => {
  return pagesMap.get(path)?.meta?.tabBar
}

console.log(pagesMap, '*-*-*pagesMap---')

export { isTabBar, pagesMap }
