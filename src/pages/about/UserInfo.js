import React from 'react';
import { Text, View } from '@tarojs/components';
import AtAvatar from 'taro-ui/lib/components/avatar';
import AtList from 'taro-ui/lib/components/list';
import AtListItem from 'taro-ui/lib/components/list/item';

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
    const area = province + ' ' + city;
    return (
        <View style={{marginTop: 20}}>
            <View className='at-row at-row__justify--center'>
                <AtAvatar circle size='large' image={avatarUrl} />
            </View>
            <View className='at-row at-row__justify--center'>
                <Text>{nickName}</Text>
            </View>
            <AtList>
                <AtListItem title='性别' extraText={gender === 0 ? '未知' : gender === 1 ? '男' : '女'} />
                <AtListItem title='国家' extraText={country} />
                <AtListItem title='地区' extraText={area} />
                <AtListItem title='语言' extraText={language} />
            </AtList>
        </View>
    );
}

export default UserInfo;
