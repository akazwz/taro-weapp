import React from 'react';
import { Text, View } from '@tarojs/components';
import AtAvatar from 'taro-ui/lib/components/avatar';

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
            <View className='at-row at-row__justify--center'>
                <AtAvatar circle size='large' image={avatarUrl} />
            </View>
        </View>
    );
}

export default UserInfo;
