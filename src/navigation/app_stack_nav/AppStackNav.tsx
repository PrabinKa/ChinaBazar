import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from '../bottom_tab_nav/BottomTabNav';
import SearchScreen from '../../screens/search/SearchScreen';

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
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNav;
