import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Tombol = () => {
  const [boxColor, setBoxColor] = useState('red');

  const changeColor = () => {
    setBoxColor(prevColor => (prevColor === 'red' ? 'yellow' : 'red'));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: boxColor }]} />
      <Button title="Change Color" onPress={changeColor} />
    </View>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});
