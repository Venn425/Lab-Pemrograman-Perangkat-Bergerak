import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Lat1() {
  return (
    <View style={styles.container}>
        <Text style={styles.judul}>Center</Text>
        <Text>Teks ini berada di tengah tengah halaman</Text>
        <Image
          source={require("../assets/mid.png")}
          style={{ width: 200, height: 200 }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  judul: {
    fontSize: 50,
    color: 'red',
    fontWeight: 'bold',
},
});
