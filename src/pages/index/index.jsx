import React, { useEffect, useState } from 'react';
import { ScrollView, View } from '@tarojs/components';
import { usePullDownRefresh, useReady } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import './index.scss';


const SingleHotSearch = (props) => {
    const {time, searches} = props.data;
    if ( time === '' ) {
        return <View>no data...</View>
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

    useReady(() => {
        getCurrentHotSearch();
    })

    const getCurrentHotSearch = () => {
        console.log('running');
        Taro.request({
            url: 'https://hs.hellozwz.com/hot-searches/current',
        }).then((res) => {
            Taro.stopPullDownRefresh();
            if ( res.statusCode !== 200 ) {
                return;
            }
            const {code, msg, data} = res.data;
            if ( code !== 2000 ) {
                return;
            }
            setHotData(data);
        }).catch((err) => {
            console.log(err);
        });
    }

    Taro.setBackgroundColor({
        textStyle: 'light',
        backgroundColor: '#8C8C8C',
    }).then();

    usePullDownRefresh(() => {
        getCurrentHotSearch()
    });

    return (
        <ScrollView>
            <SingleHotSearch data={hotData} />
        </ScrollView>
    );
}

export default Index;
