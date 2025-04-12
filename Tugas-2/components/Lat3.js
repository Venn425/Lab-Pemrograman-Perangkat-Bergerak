import React from 'react';
import { Image, View, Text, StyleSheet, SafeAreaView } from 'react-native';

const Lat3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/ibik1.png")}
        style={styles.logo}
      />
      <Text style={styles.loading}>Loading...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#880E8F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loading: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
  },
});

export default Lat3;
