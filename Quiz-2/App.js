import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloScreen from './component/HelloScreen';
import CounterApp from './component/CounterApp';
import ListMahasiswa from './component/ListMahasiswa';
import FormPendaftaran from './component/FormPendaftaran';
import HomeScreen from './component/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './component/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <HelloScreen />
    // <CounterApp />
    // <ListMahasiswa />
    // <FormPendaftaran />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Profil" component={ProfileScreen} options={{ title: 'Profil Saya' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
