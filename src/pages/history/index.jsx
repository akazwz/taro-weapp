import React, { useState } from 'react';
import { View, Picker } from '@tarojs/components';
import { useTabItemTap } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import AtList from 'taro-ui/lib/components/list';
import AtListItem from 'taro-ui/lib/components/list/item';
import AtButton from 'taro-ui/lib/components/button';
import './index.scss';

const History = () => {
    const t = new Date(Date.now()).toLocaleDateString();
    const tArr = t.split('/')

    function pad(num, n) {
        let len = num.toString().length;
        while ( len < n ) {
            num = "0" + num;
            len ++;
        }
        return num;
    }

    const today = tArr[2] + '-' + pad(parseInt(tArr[0]), 2) + '-' + pad(parseInt(tArr[1]), 2);

    const [timeSel, setTimeSel] = useState('00:00');
    const [dateSel, setDateSel] = useState(today);
    const [loading, setLoading] = useState(false);

    useTabItemTap(() => {
        Taro.vibrateShort().then()
    });
    const handleDateOnChange = (value) => {
        const day = value.detail.value;
        setDateSel(day);
    };
    const handleTimeOnChange = (value) => {
        const time = value.detail.value;
        setTimeSel(time);
    };

    const getHistoryHotSearch = (start, stop) => {
        Taro.request({
            url: 'https://hs.hellozwz.com/hot-searches',
            data: {
                start: start,
                stop: stop,
            },
        }).then((res) => {
            setLoading(false);
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
            console.log(data);
            Taro.vibrateShort().then();
        }).catch((err) => {
            Taro.atMessage({
                'message': err,
                'type': 'error',
            })
        });
    }

    const handleStartSearchBtn = () => {
        Taro.vibrateShort().then();
        const date = dateSel.replace(/-/g, '/') + ' ' + timeSel;
        let timestamp = new Date(date).getTime();
        const startStamp = timestamp - (60*60*1000);
        const d = new Date(startStamp);
        const startDay = d.toLocaleDateString()
        const arr = startDay.split('/')
        const day = arr[2] + '-' + pad(parseInt(arr[0]), 2) + '-' + pad(parseInt(arr[1]), 2);

        const startHours = d.getHours();
        let startMinutes = d.getMinutes();
        startMinutes = pad(startMinutes, 2)
        const start = day + '-' + startHours + '-' + startMinutes;
        const stop = dateSel + '-' + timeSel.replace(/:/g, '-');

        console.log(start)
        console.log(stop)

        setLoading(true);
        getHistoryHotSearch(start, stop);
    };

    return (
        <View>
            <View className='at-row'>
                <View className='at-col'>
                    <Picker mode='date' onChange={handleDateOnChange} start='2021-10-01' end={today}>
                        <AtList>
                            <AtListItem title='查看日期' extraText={dateSel} />
                        </AtList>
                    </Picker>
                </View>
                <View className='at-col'>
                    <Picker mode='time' onChange={handleTimeOnChange}>
                        <AtList>
                            <AtListItem title='查看时间' extraText={timeSel} />
                        </AtList>
                    </Picker>
                </View>
            </View>
            <AtButton loading={loading} type='primary' onClick={handleStartSearchBtn}>开始查看</AtButton>
        </View>
    );
};
export default History;
