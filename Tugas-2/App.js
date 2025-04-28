import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Lat4RFC from './components/Lat4RFC';

export default function App() {
  return (
    <View style={styles.container}>
      <Lat4RFC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
