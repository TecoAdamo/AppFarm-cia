// // DrawerNavigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddScreen from '../Screens/Add/Add'; // Importe sua tela "Add"

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Cadastrar funcionário"
        component={AddScreen}
        options={{
          headerTitle: '',
        }} />
      <Drawer.Screen
        name="Editar cadastro"
        component={AddScreen}
        options={{
          headerTitle: '',
        }} />
      <Drawer.Screen
        name="Excluir cadastro"
        component={AddScreen}
        options={{
          headerTitle: '',
        }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;