import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Screens/Home/Home';
import Add from './src/Screens/Add/Add';
import Profile from './src/Screens/Profile/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name='home' color={color} size={size}/>
            },
            tabBarItemStyle: 'false'
          }}
        />
        <Tab.Screen 
          name="Add" 
          component={Add} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name='add-circle' color={color} size={size}/>
            }
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name='person' color={color} size={size}/>
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
