import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const FormPendaftaran = () => {
  const [nama, setNama] = useState('');
  const [npm, setNpm] = useState('');
  const [nomor, setNomor] = useState('');

  const handleSubmit = () => {
    if (nama === '' || npm === '' || nomor === '') {
      Alert.alert('Error', 'Harap isi semua field!');
    } else {
      Alert.alert('Berhasil', `Nama: ${nama}\nNPM: ${npm}\nNomor: ${nomor}`);
      // Bisa juga kirim data ke server atau proses lain
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Nama Lengkap"
        value={nama}
        onChangeText={setNama}
      />
      
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Email"
        value={npm}
        onChangeText={setNpm}
        keyboardType="email-address"
      />

      <Text style={styles.label}>No. HP:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Nomor"
        value={nomor}
        onChangeText={setNomor}
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FormPendaftaran;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 15
  },
});
