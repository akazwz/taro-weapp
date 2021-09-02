import { useEffect, useState } from 'react';
import Taro, { useReady, useDidShow, useDidHide, usePullDownRefresh, } from '@tarojs/taro';
import { ScrollView, View, Swiper, SwiperItem, Button, Navigator } from '@tarojs/components';

import './index.scss';

const Index = () => {
    useEffect( () => {
    } );
    useReady( () => {
    } );
    useDidShow( () => {
    } );
    useDidHide( () => {
    } );
    usePullDownRefresh( () => {
    } );

    const NavToAbout = () => {
        Taro.navigateTo( {
            url: '/pages/about/index'
        } ).then();
    }

    return (
        <ScrollView>
            <View>
                <Button onClick={NavToAbout}>Btn</Button>
                <Swiper autoplay>
                    <SwiperItem>
                        <View>1</View>
                    </SwiperItem>
                    <SwiperItem>
                        <View>2</View>
                    </SwiperItem>
                    <SwiperItem>
                        <View>3</View>
                    </SwiperItem>
                </Swiper>
                <Navigator url='/pages/about/index'>
                    about
                </Navigator>
            </View>
        </ScrollView>
    );
};

export default Index;
