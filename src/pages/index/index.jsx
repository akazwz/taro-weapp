import { useEffect, useState } from 'react';
import Taro, {
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
    Input,
    Picker,
    Slider,
    Switch, Text,
} from '@tarojs/components';
import './index.scss';

const Index = () => {
    const [title, setTitle] = useState('WeChat');
    const [country, setCountry] = useState('Please Click To Chose');
    const selector = ['CHINA', 'USA', 'JAPAN', 'KOREA'];
    const [num, setNum] = useState(50);
    const [checked, setChecked] = useState(true);

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

    const handleShowToast = () => {
        Taro.showToast( {
            title: '成功',
            icon: 'success',
            duration: 2000
        } ).then();
    };

    const handleShowNavLoading = () => {
        Taro.showNavigationBarLoading();
    };

    const handleHideNavLoading = () => {
        Taro.hideNavigationBarLoading();
    };

    const handleSetNavTitle = () => {
        Taro.setNavigationBarTitle( {
            title: title,
        } ).then();
    };

    const handleInputOnChange = (e) => {
      const value = e.detail.value;
      setTitle(value);
    };

    const handlePickerChange = (e) => {
        const index = e.detail.value;
        setCountry(selector[index]);
    };
    
    const handleSliderOnChange = (e) => {
        const num = e.detail.value;
        setNum(num);
    }

    const handleSwitchOnChange = (e) => {
        const checked = e.detail.value;
        setChecked(checked);
    }

    return (
        <View>
            <ScrollView>
                <View>
                    <Button onClick={handleShowToast}>Toast</Button>
                    <Button onClick={handleShowNavLoading}>Set Nav Loading</Button>
                    <Button onClick={handleHideNavLoading}>Hide Nav Loading</Button>
                    <View>
                        <Input
                          value={title}
                          onInput={handleInputOnChange}
                          placeholder='Please Type Title'
                          maxlength='10'
                          className='input-custom'
                        />
                        <Button onClick={handleSetNavTitle}>
                            Set Nav Title
                        </Button>
                    </View>
                    <View>
                        <Picker
                          mode='selector'
                          range={selector}
                          onChange={handlePickerChange}
                        >
                            <View className='picker-box'>
                                Your Country: {country}
                            </View>
                        </Picker>
                    </View>
                    <View>
                        <Slider 
                          step={1} 
                          value={num} 
                          showValue 
                          min={0} 
                          max={100} 
                          onChange={handleSliderOnChange}
                          onChanging={handleSliderOnChange}
                        />
                        <Text space='nbsp'> Switch: </Text>
                        <Switch 
                          checked={checked} 
                          onChange={handleSwitchOnChange}
                        />
                        <Text space='nbsp'>  </Text>
                        Num: <Text space='nbsp'> {num}  </Text>
                        <Text space='nbsp'>
                            Checked:
                        </Text>
                         {checked ? <Text space='nbsp'> Yes</Text> : <Text space='nbsp'> No</Text>}
                    </View>

                    <Swiper autoplay>
                        <SwiperItem>
                            <View>
                                <Button>
                                    One
                                </Button>
                            </View>
                        </SwiperItem>
                        <SwiperItem>
                            <View>
                                <Button>
                                    Two
                                </Button>
                            </View>
                        </SwiperItem>
                        <SwiperItem>
                            <View>
                                <Button>
                                    Three
                                </Button>
                            </View>
                        </SwiperItem>
                    </Swiper>
                </View>
            </ScrollView>
        </View>
    );
};

export default Index;
