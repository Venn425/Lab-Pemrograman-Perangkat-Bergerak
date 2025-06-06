import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HelloScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.judul}>Halo, Selamat datang di Kuis React Native</Text>
        <Image source={{uri: 'https://media.suara.com/pictures/653x366/2024/07/01/22170-george-russell-menang-di-gp-austria-2024.jpg'}} style={styles.pict}/>
        <TouchableOpacity style={styles.klik} onPress={() => alert('Tombol Berhasil Ditekan')}>
            <Text style={styles.textButton}>Klik Saya</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HelloScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20ebeb',
        alignItems: 'center',
        justifyContent: 'center',
    },
    judul: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    pict: {
        width: 300,
        height: 300,
        borderRadius: 50,
        marginTop: 20,
    },
    klik: {
        backgroundColor: '#fff',
        borderWidth: 5,
        borderColor: '#1779a0',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 20,
        width: 150,
        height: 50,
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    
});