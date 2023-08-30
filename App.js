import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { MyTabs } from './Navigation/TabNavigationComponent';
import {ContextContainer} from './Context/Context'

import { RNCSafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <RNCSafeAreaProvider>

    <NavigationContainer>
      <ContextContainer>
        <MyTabs/>
        <StatusBar style="auto" />
      </ContextContainer>
    </NavigationContainer>
    </RNCSafeAreaProvider>
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
