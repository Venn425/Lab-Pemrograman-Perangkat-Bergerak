import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

class Lat4RCC extends Component {
  constructor() {
    super();
    this.state = {
      MyBio: {
        identity: {
          npm: 212310056,
          firstname: "MUHAMMAD",
          middlename: "ZIDAN",
          lastname: "AKBAR",
        },
        educations: [
          { id: 1, school: "SDN 1 Kota Bogor" },
          { id: 2, school: "SMPN 1 Kota Bogor" },
          { id: 3, school: "SMAN 1 Kota Bogor" },
        ],
        mobile_phone: "0812345679",
        email: "212310056@student.ibik.ac.id",
        gender: 'M',
        tall_body: 175,
        weight_body: 64.5,
      },
    };
  }

  render() {
    const { identity, educations, mobile_phone, email, gender, tall_body, weight_body } = this.state.MyBio;

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Data Diri (Lat4RCC)</Text>
        
        <Text style={styles.subHeader}>Identitas</Text>
        <Text>NPM: {identity.npm}</Text>
        <Text>Nama: {identity.firstname} {identity.middlename} {identity.lastname}</Text>

        <Text style={styles.subHeader}>Riwayat Pendidikan</Text>
        <FlatList
          data={educations}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Text>{item.school}</Text>}
        />

        <Text style={styles.subHeader}>Kontak & Fisik</Text>
        <Text>No HP: {mobile_phone}</Text>
        <Text>Email: {email}</Text>
        <Text>Jenis Kelamin: {gender}</Text>
        <Text>Tinggi Badan: {tall_body} cm</Text>
        <Text>Berat Badan: {weight_body} kg</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Lat4RCC;
