import { View } from '@tarojs/components';
import './index.scss';

const Index = () => {
  const vData = Array(50).fill(0).map((_, i) => i);
  const Single = vData.map((_, i) => {
    return (
      <View key={i}>
        {i}
      </View>
    );
  })
  return (
    <View id='vl'>
      {Single}
    </View>
  );
}

export default Index;
