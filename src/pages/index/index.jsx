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
    Button,
    ActionSheet,
    Dialog,
    Toast,
    Notify,
} from '@taroify/core';
import {
    FriendsOutlined,
    HomeOutlined, Search,
    SettingOutlined,
} from '@taroify/icons';

import './index.scss';

const Index = () => {
    const [activeKey, setActiveKey] = useState(0);
    const [title, setTitle] = useState('WeChat');
    const [actionSheetOpen, setActionSheetOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);
    const [notifyOpen, setNotifyOpen] = useState(false);
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

    const handleBtnActionSheetClick = () => {
        setActionSheetOpen(true);
    }
    const handleBtnDiaLogClick = () => {
        setDialogOpen(true);
    }
    const handleBtnToastClick = () => {
        setToastOpen(true);
        setTimeout(() => {
            setToastOpen(false);
        }, 3000)
    }

    return (
        <View>
            <Navbar title='标题'>
                <Navbar.NavLeft>返回</Navbar.NavLeft>
                <Navbar.NavRight icon={<Search/>}/>
            </Navbar>

            <Row justify='space-around'>
                <Col span='8'>
                    <Button
                        color='primary'
                        onClick={handleBtnActionSheetClick}
                    >
                        ActionSheet
                    </Button>
                </Col>
                <Col span='8'>
                    <Button
                        color='info'
                        onClick={handleBtnDiaLogClick}
                    >
                        DiaLog
                    </Button>
                </Col>
                <Col span='8'>
                    <Button
                        color='success'
                        onClick={handleBtnToastClick}
                    >
                        Toast
                    </Button>
                </Col>
            </Row>
            <ActionSheet
                open={actionSheetOpen}
                onSelect={() => setActionSheetOpen(false)}
                onCancel={() => setActionSheetOpen(false)}
                onClose={setActionSheetOpen}>
                <ActionSheet.Header>这是一段描述信息</ActionSheet.Header>
                <ActionSheet.Action name='选项一'/>
                <ActionSheet.Action name='选项二'/>
                <ActionSheet.Action name='选项三'/>
                <ActionSheet.Button type='cancel'>取消</ActionSheet.Button>
            </ActionSheet>
            <Dialog open={dialogOpen} onClose={setDialogOpen}>
                <Dialog.Header>标题</Dialog.Header>
                <Dialog.Content>代码是写出来给人看的，附带能在机器上运行</Dialog.Content>
                <Dialog.Actions>
                    <Button onClick={() => setDialogOpen(false)}>确认</Button>
                </Dialog.Actions>
            </Dialog>
            <Toast open={toastOpen} type='fail'>成功文案</Toast>
            <Notify open={notifyOpen} color='primary'>通知内容</Notify>
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
