import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RFC from './Soal/RFC';
import RCC from './Soal/RCC';
import Formulir from './Soal/Formulir';
import Tombol from './Soal/Tombol';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <RFC/>
    //   <RCC/>
    // </View>
      // <Formulir/>
      <Tombol/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
