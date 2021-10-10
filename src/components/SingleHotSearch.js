import React from 'react';
import { ScrollView, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import AtDivider from 'taro-ui/lib/components/divider';
import AtActivityIndicator from 'taro-ui/lib/components/activity-indicator';
import './index.scss';

const SingleHotSearch = (props) => {
    const {time, searches} = props.data;
    if ( time === '' ) {
        return (
            <View style={{
                position: 'relative',
                height: 50,
                marginTop: 30,
            }}
            >
                <AtActivityIndicator mode='center' content='加载中...' />
            </View>
        );
    }

    const list = searches.map((singleHot, index) => {
        const {rank, content, link, hot, tag, icon} = singleHot;
        let showContent = content;
        if ( content.length > 17 ) {
            showContent = content.substr(0, 17) + '...'
        }
        const handleItemClick = () => {
            Taro.vibrateShort().then();
            console.log(link)
        }
        return (
            <View key={index}>
                <View
                  className='single-view'
                  hoverClass={rank <= 3 ? 'single-view-hover-top' : 'single-view-hover'}
                  onClick={handleItemClick}
                >
                    <Text
                      style={{
                            color: rank <= 3 ? '#F24949' : '#F28241',
                            fontWeight: rank <= 3 ? '700' : '500',
                            fontSize: 17,
                            fontStyle: 'italic',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {rank}
                    </Text>
                    <Text className='content'>
                        {showContent}
                    </Text>
                    <Text className='hot'>{hot}</Text>
                    {tag === '' ? null : (
                        <Text style={{
                            color: '#F28241',
                            fontSize: 13,
                            marginLeft: 3,
                        }}
                        >{tag}</Text>
                    )}
                    <Text style={{
                        color: icon === '新' ? '#4EA4D9' : '#EE2027',
                        fontSize: 14,
                        marginLeft: 3,
                    }}
                    >
                        {icon}
                    </Text>
                </View>
                <AtDivider height={50} />
            </View>
        );
    });

    return (
        <ScrollView>
            <AtDivider height={70}>
                {time}
            </AtDivider>
            {list}
        </ScrollView>
    );
}

export default SingleHotSearch;
