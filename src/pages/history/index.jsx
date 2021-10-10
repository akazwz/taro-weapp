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
        <View className='about'>
            This is history.
        </View>
    );
};
export default History;
