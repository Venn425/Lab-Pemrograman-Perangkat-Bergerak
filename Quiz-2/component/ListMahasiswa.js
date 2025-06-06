import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListMahasiswa = () => {
    const [Mahasiswa, setMahasiswa] = useState([
        {id: 1, nama: 'Steven Gyasi', NPM: '232310025'},
        {id: 2, nama: 'Azzahra Kusuma', NPM: '232310026'},
        {id: 3, nama: 'Lutfi Halimawan', NPM: '232310027'},
        {id: 4, nama: 'Windah Basudara', NPM: '232310028'}, 
        {id: 5, nama: 'Rama Tihara', NPM: '232310029'}, 
    ]);

    const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.npm}>NPM: {item.NPM}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Daftar Mahasiswa</Text>
      <FlatList
        data={Mahasiswa}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ListMahasiswa

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  judul: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  npm: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});
