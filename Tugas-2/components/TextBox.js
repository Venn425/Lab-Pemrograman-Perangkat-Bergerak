import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';

const TextBox = () => {
  return (
    <View style={styles.box}>
      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>History of Bicycle</Text>
    </View>
  );
};

const styles = {
  box: {
    border: '1px solid #ccc',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
};

export default TextBox;
