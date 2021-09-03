import { useEffect, useState } from 'react';
import Taro, {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh,
} from '@tarojs/taro';
import {
    View,
} from '@tarojs/components';
import {
    Row,
    Col,
    Tabbar,
    Navbar,
} from '@taroify/core';
import {
    FriendsOutlined,
    HomeOutlined, Search,
    SettingOutlined
} from '@taroify/icons';
import './index.scss';

const Index = () => {
    const [activeKey, setActiveKey] = useState(0);
    const [title, setTitle] = useState('WeChat');
    useEffect(() => {
    });
    useReady(() => {
    });
    useDidShow(() => {
    });
    useDidHide(() => {
    });
    usePullDownRefresh(() => {
    });

    const handleSetNavTitle = () => {
        Taro.setNavigationBarTitle({
            title: title,
        }).then();
    };


    return (
        <View>
            <Navbar title='标题'>
                <Navbar.NavLeft>返回</Navbar.NavLeft>
                <Navbar.NavRight icon={<Search/>}/>
            </Navbar>
            <Tabbar fixed activeKey={activeKey}>
                <Tabbar.TabItem icon={<HomeOutlined/>}/>
                <Tabbar.TabItem icon={<Search/>}/>
                <Tabbar.TabItem icon={<FriendsOutlined/>}/>
                <Tabbar.TabItem icon={<SettingOutlined/>}/>
            </Tabbar>
        </View>

    );
};

export default Index;
