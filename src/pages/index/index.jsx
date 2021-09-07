import { useState } from 'react';
import { Text, View } from '@tarojs/components';
import { Row, Col, Button, Popup, Toast, Rate, Slider, Switch, Dialog, Notify } from '@taroify/core';
import { Cross, Star } from '@taroify/icons';
import './index.scss';

const Index = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(true);
  const [rateValue, setRateValue] = useState(3);
  const [sliderValue, setSliderValue] = useState(50);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);

  const handleRateOnChange = (value) => {
    setRateValue(value);
  };
  return (
    <View>
      <Row justify='space-around'>
        <Col span='6'>
          <Button variant='outlined' color='primary' onClick={() => {
            setPopupOpen(true);
          }}
          >Popup</Button>
        </Col>
        <Col span='6'>
          <Button variant='outlined' color='primary' onClick={() => {
            setToastOpen(true);
          }}
          >Toast</Button>
        </Col>
        <Col span='6'>
          <Button variant='outlined' color='primary' onClick={() => {
            setDialogOpen(false);
          }}
          >Dialog</Button>
        </Col>
      </Row>
      <Row justify='space-around'>
        <Col span='6'>
          <Button variant='outlined' color='primary' onClick={() => {
            setNotifyOpen(true);
          }}
          >Notify</Button>
        </Col>
      </Row>
      <Rate
        size={25}
        color='#ffd21e'
        voidColor='#eee'
        voidIcon={<Star />}
        allowHalf
        value={rateValue}
        touchable
        onChange={handleRateOnChange}
      />
      <Slider value={sliderValue} onChange={(value) => {
        setSliderValue(value);
      }}
      />
      <Switch checked={switchChecked} onChange={() => {
        setSwitchChecked(!switchChecked);
      }}
      />

      {/*Popup*/}
      <Popup open={popupOpen} rounded placement='bottom' style={{height: '30%'}} onClose={() => {
        setPopupOpen(false);
      }}
      >
        <Popup.Close>
          <Cross />
        </Popup.Close>
      </Popup>
      {/*Toast*/}
      <Toast open={toastOpen} type='success' onClose={() => setToastOpen(false)}>
        <Text>SUCCESS</Text>
      </Toast>
      {/*Dialog*/}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Dialog.Header>标题</Dialog.Header>
        <Dialog.Content>代码是写出来给人看的，附带能在机器上运行</Dialog.Content>
        <Dialog.Actions>
          <Button onClick={() => setDialogOpen(false)}>确认</Button>
        </Dialog.Actions>
      </Dialog>
      <Notify open={notifyOpen} color='primary' onClose={() => setNotifyOpen(false)}>notify</Notify>
    </View>
  )
}

export default Index;
