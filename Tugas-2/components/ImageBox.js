import React from 'react';
import { View, Image } from 'react-native';

const ImageBox = () => {
  return (
    <View style={styles.box}>
      <Image
        source={require("../assets/sepeda.jpeg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = {
  box: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
};

export default ImageBox;
