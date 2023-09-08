// module.exports = {
//   pages: require('./modules/pages.ts'),
//   subPackages: require('./modules/sub-packages.ts'),
//   tabBar: {
//     borderStyle: 'white',
//     color: '#16191e',
//     selectedColor: '#00b3ff',
//     backgroundColor: '#fff',
//     custom: true,
//     list: require('./modules/tab-bar.ts'),
//   },
//   globalStyle: {
//     navigationStyle: 'custom',
//     navigationBarTextStyle: 'black',
//     navigationBarTitleText: 'uni-preset-vue',
//     navigationBarBackgroundColor: '#F8F8F8',
//     backgroundColor: '#F8F8F8',
//   },
// }
import pages from './modules/pages'
import subPackages from './modules/sub-packages'
import tabBarList from './modules/tab-bar'

export default {
  pages,
  subPackages,
  tabBar: {
    borderStyle: 'white',
    color: '#16191e',
    selectedColor: '#00b3ff',
    backgroundColor: '#fff',
    custom: true,
    list: tabBarList,
  },
  globalStyle: {
    navigationStyle: 'custom',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-preset-vue',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
  },
}
