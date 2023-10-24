import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home/Home';
import DrawerNavigation from './DrawerNav';
// import Add from '../Screens/Add/Add';
import Profile from '../Screens/Profile/Profile';


import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
   
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
          component={DrawerNavigation} 
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
   
  );
}