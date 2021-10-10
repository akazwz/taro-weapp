import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { Button, View } from '@tarojs/components';
import { useReady, useTabItemTap } from '@tarojs/runtime';
import './index.scss';
import UserInfo from './UserInfo';

const About = () => {
    // tap vibrate
    useTabItemTap(() => {
        Taro.vibrateShort().then()
    });

    const [userInfo, setUserInfo] = useState({
        avatarUrl: "",
        city: "",
        country: "",
        gender: "0",
        language: "zh_CN",
        nickName: "",
        province: "",
    });
    const [hasUserInfo, setHasUserInfo] = useState(false);

    useReady(() => {
        // userInfo local storage
        try {
            let info = Taro.getStorageSync('userInfo')
            if ( info ) {
                setHasUserInfo(true);
                setUserInfo(JSON.parse(info));
            }
        } catch ( e ) {
            console.log(e);
        }
    });

    // get userInfo
    const getUserInfo = () => {
        let userProfile = Taro.getUserProfile({
            desc: '用于完善会员资料',
            success: (res) => {
                setUserInfo(res.userInfo);
                setHasUserInfo(true);
                try {
                    Taro.setStorageSync('userInfo', JSON.stringify(res.userInfo));
                } catch ( e ) {
                    console.log(e);
                }
            },
            fail: (err) => {
                console.log(err);
            },
        });
        console.log(userProfile);
    }
    return (
        <View className='center-text'>
            {hasUserInfo ? (
                <UserInfo userInfo={userInfo} />
            ) : (<View>
                <Button onClick={getUserInfo}>获取授权</Button>
            </View>)}
        </View>
    );
}
export default About;
