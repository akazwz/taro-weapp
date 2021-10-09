import React, { useEffect, useState } from 'react';
import { ScrollView, View } from '@tarojs/components';
import { usePullDownRefresh } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import './index.scss';


const singleHotSearch = (data) => {
    const {time, searches} = data;
    if ( time === '' ) {
        return <View>Loading...</View>
    }

    const list = searches.map((singleHot, index) => {
        const {rank, content, link, hot, tag, icon} = singleHot;
        return (
            <View key={index}>
                {rank}
                {content}
                {hot}
                {tag}
            </View>
        );
    });

    return (
        <View>
            {time}
            {list}
        </View>
    );
}

const Index = () => {
    const [hotData, setHotData] = useState({
        time: '',
        searches: [],
    });

    useEffect(() => {
        getCurrentHotSearch().then()
    });

    const getCurrentHotSearch = async() => {
        await Taro.request({
            url: 'https://hs.hellozwz.com/hot-searches/current',
        }).then((res) => {
            Taro.stopPullDownRefresh();
            if ( res.statusCode !== 200 ) {
                Taro.showToast({
                    title: '获取失败',
                    image: 'resource/us.png',
                    duration: 2000
                });
                return;
            }
            const {code, msg, data} = res.data;
            if ( code !== 2000 ) {
                Taro.showToast({
                    title: msg,
                    image: 'resource/us.png',
                    duration: 2000
                });
                return;
            }
            setHotData(data);
        }).catch((err) => {
            Taro.showToast({
                title: err,
                image: 'resource/us.png',
                duration: 2000
            });
        });
    }

    Taro.setBackgroundColor({
        textStyle: 'light',
        backgroundColor: '#8C8C8C',
    }).then();

    usePullDownRefresh(() => {
        getCurrentHotSearch().then()
    });

    return (
        <ScrollView>
            {singleHotSearch(hotData)}
        </ScrollView>
    );
}

export default Index;
