module.exports = {
  pages: [
    {
      path: 'pages/index',
      style: {
        disableScroll: true,
        navigationBarTitleText: '首页',
      },
    },
    {
      path: 'pages/web-view',
      style: {
        navigationBarTitleText: 'web-view',
      },
    },
    {
      path: 'pages/my',
      style: {
        navigationBarTitleText: '我的',
      },
    },
  ],
  subPackages: [
    {
      root: 'package-user',
      pages: [
        {
          path: 'pages/index',
          style: {
            navigationBarTitleText: 'package-user',
          },
        },
      ],
    },
  ],
  tabBar: {
    borderStyle: 'white',
    color: '#16191e',
    selectedColor: '#00b3ff',
    backgroundColor: '#fff',
    custom: true,
    list: [
      {
        pagePath: 'pages/index',
        text: '首页',
        iconPath: 'static/icon-new-follow-current.png',
        selectedIconPath: 'static/icon-new-follow-current.png',
      },
      {
        pagePath: 'pages/my',
        text: '我的',
        iconPath: 'static/icon-new-follow-current.png',
        selectedIconPath: 'static/icon-new-follow-current.png',
      },
    ],
  },
  globalStyle: {
    navigationStyle: 'custom',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-preset-vue',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
  },
}
