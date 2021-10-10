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
        <View style={{textAlign: 'center'}}>
            <Text>敬请期待</Text>
        </View>
    );
}
export default Trend;
