import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = ({ navigtion }) => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/kimi.jpeg')} style={styles.image} />
        <View style={styles.content}>
            <Text style={styles.text}>Nama Lengkap: Kimi Antonelli</Text>
            <Text style={styles.text}>Email: kimi.antonelli@gmail.com</Text>
        </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'flex-start',
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: '#1779a0',
    borderRadius: 20,
    marginBottom: 20,
  },
  content: {
    width: 400,
    backgroundColor: '#1779a0',
    borderRadius: 10,
    padding: 20,
  },
});