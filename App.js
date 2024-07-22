import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import { MyTabs } from './Navigation/TabNavigationComponent';
import {ContextContainer} from './Context/Context'

import { RNCSafeAreaProvider } from 'react-native-safe-area-context';
import { MyStack } from './Navigation/StackNavigationComponent';

export default function App() {
  return (
    <NavigationContainer>
      <ContextContainer>
        <MyStack/>
        <StatusBar style="auto" />
      </ContextContainer>
    </NavigationContainer>
  );
}
