import React from 'react';
import { View, Text } from '@tarojs/components';
import { useTabItemTap } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import './index.scss';

const Trend = () => {
    useTabItemTap(() => {
        Taro.vibrateShort().then()
    });

    return (
        <View className='about'>
            <Text>This is Trend.</Text>
        </View>
    );
}
export default Trend;
