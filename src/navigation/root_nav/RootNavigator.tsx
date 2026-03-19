import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStackNav from '../app_stack_nav/AppStackNav';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationDuration: 250,
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
        }}
      >
        <Stack.Screen name="Root" component={AppStackNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
