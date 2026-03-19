import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from '../bottom_tab_nav/BottomTabNav';

const Stack = createNativeStackNavigator();

const AppStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 250,
        gestureEnabled: true,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="HomeTab" component={BottomTabNav} />
    </Stack.Navigator>
  );
};

export default AppStackNav;
