import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function DetailScreen({ route, navigation }) {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>Harga: Rp {product.price}</Text>
            <Text style={styles.type}>Kategori: {product.type}</Text>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Status', 'Pesanan akan segera dibuat!')}>
                <Text style={styles.link}>Beli (Cash)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.link}>Menu</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#8f0cd5', flex: 1, padding: 20 },
    title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    price: { color: '#fff', fontSize: 18 },
    type: { color: '#fff', fontSize: 16, marginBottom: 20 },
    button: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 20 },
    link: { color: '#8f0cd5', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});
