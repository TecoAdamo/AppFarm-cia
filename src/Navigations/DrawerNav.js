// // DrawerNavigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddScreen from '../Screens/Add/Add'; // Importe sua tela "Add"

import Ionicons from 'react-native-vector-icons/Ionicons'
import Editar from '../Editar/Editar';
import Excluir from '../Excluir/Excluir';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Cadastrar funcionário"
        component={AddScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name='person-add' color={color} size={size} />
          },
          headerTitle: '',
        }}
      />
        <Drawer.Screen
          name="Excluir cadastro"
          component={Excluir}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons name='person-remove' color={color} size={size} />
            },
            headerTitle: '',
          }}
        />
      <Drawer.Screen
        name="Editar cadastro"
        component={Editar}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name='create' color={color} size={size} />
          },
          headerTitle: '',
        }}
      />


    </Drawer.Navigator>
  );
};

export default DrawerNavigation;