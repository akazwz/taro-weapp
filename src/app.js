import React, { useEffect } from 'react';
import { useDidShow, useDidHide } from '@tarojs/taro';
import { Provider } from 'react-redux';
import store from './redux/store';

function App(props) {
    useEffect(() => {
    })

    useDidShow(() => {
    })

    useDidHide(() => {
    })

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default App
