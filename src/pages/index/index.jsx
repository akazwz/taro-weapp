import { useEffect } from 'react';
import {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh,
} from '@tarojs/taro';
import {
    ScrollView,
    View,
    Swiper,
    SwiperItem,
    Button,
} from '@tarojs/components';
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

    return (
        <View>
            <ScrollView>
                <View>
                    <Button>Btn</Button>
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
                </View>
            </ScrollView>
        </View>
    );
};

export default Index;
