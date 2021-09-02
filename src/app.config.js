export default {
    pages: [
        'pages/index/index',
        'pages/about/index',
    ],
    tabBar: {
        list: [ {
            pagePath: 'pages/index/index',
            text: 'Index',
        }, {
            pagePath: 'pages/about/index',
            text: 'About',
        }, ],
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
