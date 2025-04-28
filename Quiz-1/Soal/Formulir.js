import React, { useState } from 'react'
import { Alert, Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'

const Formulir = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telp, setTelp] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (name.trim() !== "" && email.trim() !== "") {
        setSubmitted(true);
        {submitted && (
            Alert.alert(
                "Form Data", 
                `Name: ${name}\nEmail: ${email}\nNo. Telp: ${telp}`
              )
        )}
        } else {
        Alert.alert("Error", "Kolom Harus Diisi!");
        }
    };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <View style={styles.container}>
            <Text style={styles.title}>Form Pendaftaran</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nama Lengkap:</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Masukkan Nama Lengkap"
                    />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Masukkan Email"
                    />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>No Telp:</Text>
                    <TextInput
                        style={styles.input}
                        value={telp}
                        onChangeText={setTelp}
                        placeholder="Masukkan No. Telp"
                    />
            </View>
            <Button title="Submit" onPress={handleSubmit} />

        </View>
    </SafeAreaView>
  )
}

export default Formulir

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        margin: '5%',
    },

    title: {
        color: "black",
        marginBottom: 20,
        fontStyle: "italic",
        fontFamily: "arial",
        fontSize: 34,
        fontWeight: '900',
    },

    inputContainer: {
        marginBottom: 15,
    },
    
    label: {
        color: "Black",
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "bold",
    },
    
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        fontFamily: "Arial",
    },

});