import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Colors } from 'react-native-paper';
import Favorites from '../../screens/favorites';
import { headerBackWithIconConfig, headerTitleStyle } from '../NavigationTheme';
import ScreenNames from '../ScreenNames';

const Stack = createStackNavigator<RootStackParamList>();

const FavoritesTab = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.lightBlue700,
        ...headerBackWithIconConfig,
        headerTitleStyle: headerTitleStyle,
      }}>
      <Stack.Screen
        name={ScreenNames.FAVORITES}
        component={Favorites}
        options={{
          headerTitle: 'Shop',
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesTab;
