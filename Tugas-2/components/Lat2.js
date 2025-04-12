import React from 'react';
import TextBox from './TextBox';      
import ImageBox from './ImageBox';  
import { View } from 'react-native';

const Lat2 = () => {
  return (
    <View style={styles.container}>
      <TextBox />
      <ImageBox />
    </View>
  );
};

const styles = {
  container: {
    padding: 20,
    textAlign: 'center',
  },
};

export default Lat2;
