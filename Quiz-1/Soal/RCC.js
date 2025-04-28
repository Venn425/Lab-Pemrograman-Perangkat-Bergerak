import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default class RCC extends Component {
  render() {
    return (
      <View style={styles.container}>
              <Image source={require("../assets/pp.jpg")} style={styles.foto}/>
              <Text style={styles.nama}>Steven Gyasi</Text>
              <View style={styles.data}>
                  <Text style={styles.profil}>NPM: 232310025</Text>
                  <Text style={styles.profil}>Jurusan: Teknologi Informasi</Text>
                  <Text style={styles.profil}>Hobi: Berenang, Volly, Badmin</Text>
              </View>
          </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },

    foto: {
        borderRadius: 150,
        borderColor: "white",
        borderWidth: 10,
    },

    nama: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 30,
    },

    data: {
        backgroundColor: "white",
        width: "80%",
        padding: 20,
        borderRadius: 10,
    },

    profil: {
        fontSize: 20,
        fontWeight: '500',
    }
});