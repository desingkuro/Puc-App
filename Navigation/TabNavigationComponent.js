import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../Screens/Settings';
import {Home} from '../Screens/Home'
import {MyStack} from './StackNavigationComponent'

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Mystack"
      screenOptions={{
        activeTintColor: "#2499c7",
      }}
    >
      <Tab.Screen 
        name="Mystack" 
        component={MyStack} 
        options={{
          headerShown:false,
          tabBarIcon:({color,size})=>{
            return <Ionicons name="home" size={size} color={color} />
        },
        tabBarLabelStyle:{
          display:'none'
        }
        }}
      />

      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
            tabBarIcon:({color,size})=>{
                return <MaterialIcons name="settings" size={size} color={color} />
            },
            tabBarLabelStyle:{
                display:'none'
            }
        }}/>
    </Tab.Navigator>
  );
}