export default {
    pages: [
        'pages/index/index',
        'pages/history/index',
        'pages/trend/index',
        'pages/about/index',
    ],
    tabBar: {
        list: [
            {
                'iconPath': 'resource/hot-search.png',
                'selectedIconPath': 'resource/hot-search-selected.png',
                pagePath: 'pages/index/index',
                text: '今'
            },
            {
                'iconPath': 'resource/history.png',
                'selectedIconPath': 'resource/history-selected.png',
                pagePath: 'pages/history/index',
                text: '史'
            },
            {
                'iconPath': 'resource/trend-circle.png',
                'selectedIconPath': 'resource/trend-circle-selected.png',
                pagePath: 'pages/trend/index',
                text: '势'
            },
            {
                'iconPath': 'resource/us.png',
                'selectedIconPath': 'resource/us-selected.png',
                pagePath: 'pages/about/index',
                text: '余'
            },
        ],
        'color': '#bfbfbf',
        'selectedColor': '#2c2c2c',
        'backgroundColor': '#fff',
        'borderStyle': 'white'
    },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    }
}
