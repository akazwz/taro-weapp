export default {
  pages: [
    'pages/index/index',
    'pages/about/index',
  ],
  tabBar: {
    list: [
      {
        'iconPath': 'resource/home.png',
        'selectedIconPath': 'resource/home-selected.png',
        pagePath: 'pages/index/index',
        text: 'Home'
      },
      {
        'iconPath': 'resource/about.png',
        'selectedIconPath': 'resource/about-selected.png',
        pagePath: 'pages/about/index',
        text: 'About'
      }
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
