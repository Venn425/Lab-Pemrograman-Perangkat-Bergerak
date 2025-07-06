import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductCard({ product, onBuy, status }) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{product.name}</Text>
            <Text>Rp {product.price}</Text>
            <Text>Jenis: {product.type}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 5,
    },
    name: { fontSize: 16, fontWeight: 'bold' },
});
