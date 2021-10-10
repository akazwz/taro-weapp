import React from 'react';
import { View } from '@tarojs/components';
import { useTabItemTap } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import './index.scss';

const History = () => {
    useTabItemTap(() => {
        Taro.vibrateShort().then()
    });
    return (
        <View style={{textAlign: 'center'}}>
            敬请期待
        </View>
    );
};
export default History;
