import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Colors } from 'react-native-paper';
import Home from '../../screens/home';
import { headerBackWithIconConfig, headerTitleStyle } from '../NavigationTheme';
import ScreenNames from '../ScreenNames';

const Stack = createStackNavigator<RootStackParamList>();

const HomeTab = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.lightBlue700,
        ...headerBackWithIconConfig,
        headerTitleStyle: headerTitleStyle,
      }}>
      <Stack.Screen
        name={ScreenNames.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeTab;
