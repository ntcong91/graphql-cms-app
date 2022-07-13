import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Colors } from 'react-native-paper';
import Shop from '../../screens/shop';
import { headerBackWithIconConfig, headerTitleStyle } from '../NavigationTheme';
import ScreenNames from '../ScreenNames';

const Stack = createStackNavigator<RootStackParamList>();

const ShopTab = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.lightBlue700,
        ...headerBackWithIconConfig,
        headerTitleStyle: headerTitleStyle,
      }}>
      <Stack.Screen
        name={ScreenNames.SHOP}
        component={Shop}
        options={{
          headerTitle: 'Shop',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopTab;
