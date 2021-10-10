import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { usePullDownRefresh, useReady, useTabItemTap } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import AtMessage from 'taro-ui/lib/components/message';
import './index.scss';
import SingleHotSearch from '../../components/SingleHotSearch';

const Index = () => {
    const [hotData, setHotData] = useState({
        time: '',
        searches: [],
    });

    useReady(() => {
        getCurrentHotSearch();
    })

    const getCurrentHotSearch = () => {
        Taro.vibrateShort().then();
        Taro.request({
            url: 'https://hs.hellozwz.com/hot-searches/current',
        }).then((res) => {
            Taro.stopPullDownRefresh();
            if ( res.statusCode !== 200 ) {
                Taro.atMessage({
                    'message': '获取失败',
                    'type': 'error',
                })
                return;
            }
            const {code, msg, data} = res.data;
            if ( code !== 2000 ) {
                Taro.atMessage({
                    'message': msg,
                    'type': 'error',
                })
                return;
            }
            Taro.atMessage({
                'message': '成功',
                'type': 'success',
            })
            setHotData(data);
            Taro.vibrateShort().then();
        }).catch((err) => {
            Taro.atMessage({
                'message': err,
                'type': 'error',
            })
        });
    }

    Taro.setBackgroundColor({
        backgroundColor: '#8C8C8C',
    }).then();

    usePullDownRefresh(() => {
        getCurrentHotSearch()
    });

    useTabItemTap(() => {
        Taro.vibrateShort().then()
    });

    return (
        <View>
            <AtMessage />
            <SingleHotSearch data={hotData} />
        </View>
    );
}

export default Index;
