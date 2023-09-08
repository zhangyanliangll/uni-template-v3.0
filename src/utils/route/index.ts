import pagesJson from '@/router/index'
const { pages, tabBar, subPackages } = pagesJson

type RouteConfig = RouteUtils.RouteConfig<string>

// 将 pages.json 转换成 Map对象, path 为 key
const pagesMap = new Map<string, RouteConfig>()

pages.forEach((page: RouteConfig) => {
  pagesMap.set(`/${page.path}`, page)
})

if (Array.isArray(subPackages) && subPackages.length) {
  subPackages.forEach((el) => {
    const rootPath = el.root
    el.pages.forEach((page: RouteConfig) => {
      page.path = `/${rootPath}/${page.path}`
      pagesMap.set(page.path, page)
    })
  })
}

if (tabBar) {
  const tabBarList = tabBar.list
  if (Array.isArray(tabBarList)) {
    tabBarList.forEach((el) => {
      const pagePath = `/${el.pagePath}`
      if (pagesMap.has(pagePath)) {
        const page: any = pagesMap.get(pagePath)
        const style = page?.style || {}
        style.tabBar = true
        page.style = Object.assign({}, style)
        pagesMap.set(pagePath, page)
      }
    })
  }
}

// 判断是否为 tabBar
const isTabBar = (path: string) => {
  return pagesMap.get(path)?.style?.tabBar
}

// 是否存在页面
const isPage = (path: string) => {
  return pagesMap.get(path)
}

console.log(pagesJson, '-=-=pagesJson-=-=')

export { isTabBar, isPage, pagesMap }
