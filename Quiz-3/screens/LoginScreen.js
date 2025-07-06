import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const users = {
        'steven@ibik.ac.id': '123456',
        'venn@ibik.ac.id': 'password',
        'gyasi@ibik.ac.id': 'admin123'
    };

    const handleLogin = () => {
        if (users[email] && users[email] === password)  {
            const name = email.split('@')[0];
            navigation.replace('Home', { name });
        } else {
            Alert.alert('Login Gagal', 'Gunakan email IBIK dan password yang benar');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/ibik1.png')} style={styles.logo} />
            <Text style={styles.title}>Login Kantin IBIK</Text>
            <TextInput placeholder="Email IBIK" style={styles.input} onChangeText={setEmail} />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={setPassword} />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.link}>Masuk</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#8f0cd5', padding: 20, flex: 1},
    logo: { width: 100, height: 100, marginBottom: 20, alignSelf: 'center' },
    title: { color:'#fff', fontSize: 24, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
    input: { backgroundColor: '#fff', opacity: 0.5, borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
    button: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 20 },
    link: { color: '#8f0cd5', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },  
});
    