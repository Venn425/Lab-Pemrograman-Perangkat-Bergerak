import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const profile = {
    nama: 'Steven Gyasi',
    email: '232310025@student.ibik.ac.id',
    telepon: '081511299289',
    alamat: 'Jl. Menteng Ujung',
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.judul}>My Profile</Text>

      <View style={styles.isi}>
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.value}>{profile.nama}</Text>
      </View>

      <View style={styles.isi}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{profile.email}</Text>
      </View>

      <View style={styles.isi}>
        <Text style={styles.label}>No. Telepon:</Text>
        <Text style={styles.value}>{profile.telepon}</Text>
      </View>

      <View style={styles.isi}>
        <Text style={styles.label}>Alamat:</Text>
        <Text style={styles.value}>{profile.alamat}</Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f3',
    padding: 20,
    justifyContent: 'center',
  },
  judul: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  isi: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 110,
    color: '#555',
  },
  value: {
    flexShrink: 1,
    color: '#000',
  },
});
