import {useEffect, useState} from 'react';
import {View, Icon, Editor, Button, Picker, Text} from '@tarojs/components';
import {useReady, useDidShow, useDidHide, usePullDownRefresh,} from '@tarojs/taro';
import './index.scss';

const Index = () => {
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

  const [selector] = useState(['美国', '中国', '巴西', '日本']);
  const [selected, setSelected] = useState('美国');

  const handlePickerOnChange = (e) => {
    setSelected(selector[e.detail.value]);
  };

  return (
    <View className='index'>
      <Icon size='60' type='success' />
      <Editor id='editor' placeholder='please input' />
      <Button size='mini' type='default'>Button</Button>
      <Picker mode='selector' range={selector} onChange={handlePickerOnChange}>
        <View>
          <Text>
            Selected: {selected}
          </Text>
        </View>
      </Picker>
    </View>
  );
};

export default Index;
