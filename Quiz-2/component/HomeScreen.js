import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
    <View style={styles.container}>
      <Text style={styles.judul}>Welcome Back!</Text>
      <Image source={require('../assets/merc.jpeg')} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profil')}>
        <Text style={styles.buttonText}>Lihat Proflie</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  judul: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop:100,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1779a0',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },    
});