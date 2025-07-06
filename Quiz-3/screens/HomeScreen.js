import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';

const menu = [
    { id: '1', name: 'Nasi Goreng', price: 15000, type: 'Makanan' },
    { id: '2', name: 'Mie Ayam', price: 12000, type: 'Makanan' },
    { id: '3', name: 'Ayam Geprek', price: 18000, type: 'Makanan' },
    { id: '4', name: 'Nasi Uduk', price: 13000, type: 'Makanan' },
    { id: '5', name: 'Sate Ayam', price: 16000, type: 'Makanan' },
    { id: '6', name: 'Bakso', price: 14000, type: 'Makanan' },
    { id: '7', name: 'Es Teh', price: 4000, type: 'Minuman' },
    { id: '8', name: 'Es Jeruk', price: 5000, type: 'Minuman' },
    { id: '9', name: 'Kopi Hitam', price: 6000, type: 'Minuman' },
    { id: '10', name: 'Teh Hangat', price: 3000, type: 'Minuman' },
    { id: '11', name: 'Air Mineral', price: 3000, type: 'Minuman' },
];

export default function HomeScreen({ route, navigation }) {
    const { name } = route.params;
    const [statusPesanan, setStatusPesanan] = useState({});

    const handleBuy = (item) => {
        const updated = { ...statusPesanan, [item.id]: 'Belum Jadi' };
        setStatusPesanan(updated);
        setTimeout(() => {
            setStatusPesanan((prev) => ({ ...prev, [item.id]: 'Sudah Jadi' }));
        }, 3000);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Selamat Datang, {name}!</Text>

            {menu.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => navigation.navigate('Detail', { product: item })}
                >
                    <ProductCard
                        product={item}
                        onBuy={() => handleBuy(item)}
                        status={statusPesanan[item.id]}
                    />
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8f0cd5',
        padding: 10,
        paddingBottom: 30,
    },
    header: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
});
