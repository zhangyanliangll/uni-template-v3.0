import pages from './modules/pages'
import subPackages from './modules/sub-packages'
import list from './modules/tab-bar'

export default {
  pages,
  subPackages,
  tabBar: {
    borderStyle: 'white',
    color: '#16191e',
    selectedColor: '#00b3ff',
    backgroundColor: '#fff',
    custom: true,
    list,
  },
  globalStyle: {
    navigationStyle: 'custom',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-preset-vue',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
  },
}
