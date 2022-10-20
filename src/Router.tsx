import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { MonthlyExpenses } from './screens/MonthlyExpenses';
import { ApeExpenses } from './screens/ApeExpenses';

const Drawer = createDrawerNavigator();

export function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Despesas Mensais'
        screenOptions={{
          drawerActiveTintColor: '#322030',
          drawerInactiveTintColor: '#39393a',
          headerTitleAlign: 'center',
          headerTintColor: '#322030',
        }}
      >
        <Drawer.Screen name='Despesas Mensais' component={MonthlyExpenses} />
        <Drawer.Screen name='Despesas do apartamento' component={ApeExpenses} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
