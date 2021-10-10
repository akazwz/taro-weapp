import React from 'react';
import { Text, View } from '@tarojs/components';

const UserInfo = (props) => {
    const {
        avatarUrl,
        city,
        country,
        gender,
        language,
        nickName,
        province,
    } = props.userInfo;
    return (
        <View>
            <View><Text>{avatarUrl}</Text></View>
            <View><Text>{city}</Text></View>
            <View><Text>{country}</Text></View>
            <View><Text>{gender}</Text></View>
            <View><Text>{language}</Text></View>
            <View><Text>{nickName}</Text></View>
            <View><Text>{province}</Text></View>
        </View>
    );
}

export default UserInfo;
