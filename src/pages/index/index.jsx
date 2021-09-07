import { useRef, useState } from 'react';
import { View } from '@tarojs/components';
import { Row, Col, PullRefresh } from '@taroify/core';
import './index.scss';

const Index = () => {
    const [loading, setLoading] = useState(false)
    const counterRef = useRef(0)
    return (
        <View>
            <Row justify='space-around'>
                <Col span='6'>

                </Col>
                <Col span='6'>

                </Col>
                <Col span='6'>

                </Col>
            </Row>
            <Row justify='space-around'>
                <Col span='6'>

                </Col>
            </Row>
            <PullRefresh
              loading={loading}
              onRefresh={() => {
                    setLoading(true)
                    setTimeout(() => {
                        counterRef.current += 1
                        setLoading(false)
                    }, 1000)
                }}
            >
                <PullRefresh.Completed>刷新成功</PullRefresh.Completed>
                <View>
                    {counterRef.current ? "刷新次数：" + counterRef.current : "下拉试试"}
                </View>
            </PullRefresh>
        </View>
    )
}

export default Index;
