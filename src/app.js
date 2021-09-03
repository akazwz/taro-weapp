import React, { useEffect } from 'react';
import { useDidShow, useDidHide } from '@tarojs/taro';
import { Provider } from 'react-redux';
import store from './redux/store';
import '@taroify/icons/index.scss';
import './app.scss';

const App = (props) => {
    useEffect(() => {
    });

    useDidShow(() => {
    });

    useDidHide(() => {
    });

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};

export default App;
