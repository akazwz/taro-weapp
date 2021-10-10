import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { Button, View } from '@tarojs/components';
import { useReady, useTabItemTap } from '@tarojs/runtime';
import AtMessage from 'taro-ui/lib/components/message';
import AtList from 'taro-ui/lib/components/list';
import AtListItem from 'taro-ui/lib/components/list/item';
import AtFloatLayout from 'taro-ui/lib/components/float-layout';
import AtRate from 'taro-ui/lib/components/rate';
import './index.scss';
import UserInfo from './UserInfo';

const About = () => {
    const [aboutUs, setAboutUs] = useState(false);
    const [rateUs, setRateUs] = useState(false);
    const [rateValue, setRateValue] = useState(5);

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
            Taro.atMessage({
                'message': e,
                'type': 'error',
            })
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
        <View>
            <AtMessage />
            {hasUserInfo ? (
                <UserInfo userInfo={userInfo} />
            ) : (<View>
                <Button onClick={getUserInfo}>获取授权</Button>
            </View>)}
            <View>
                <AtList>
                    <AtListItem title='关于我们' arrow='right' onClick={() => setAboutUs(true)} />
                    <AtListItem title='评价一下' arrow='right' onClick={() => setRateUs(true)} />
                </AtList>
            </View>
            <AtFloatLayout isOpened={aboutUs} title='关于我们' onClose={() => setAboutUs(false)}>
                <View style={{textAlign: 'center', marginTop: 20}}>
                    赵文卓
                </View>
            </AtFloatLayout>
            <AtFloatLayout isOpened={rateUs} title='评价一下' onClose={() => setRateUs(false)}>
                <View style={{textAlign: 'center', marginTop: 20}}>
                    <AtRate
                      value={rateValue}
                      onChange={(value) => {
                            setRateValue(value)
                        }}
                    />
                    <View style={{marginTop: 20}}>
                        {rateValue <= 3 ? '一般' : rateValue <= 4 ? '优秀' : '极好'}
                    </View>
                </View>

            </AtFloatLayout>
        </View>
    );
}
export default About;
