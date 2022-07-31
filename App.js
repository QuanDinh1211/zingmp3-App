import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import RootStackScreen from './router'
import UserContextProvider from './store/constexts/userContext'

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStackScreen />
        <StatusBar style="auto" />
      </NavigationContainer>
    </UserContextProvider>
  );
}

