import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import Cart from '../../screens/cart/Cart';
import ShortsFeed from '../../screens/shorts/ShortsFeed';
import Live from '../../screens/live/Live';
import Account from '../../screens/account/Account';
import { IconName } from '../../types/icon';
import { RouteProp } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { COLORS } from '../../theme/colors';
import { TouchableOpacity } from 'react-native';

type TabParamList = {
  Home: undefined;
  Shorts: undefined;
  Live: undefined;
  Cart: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({
        route,
      }: {
        route: RouteProp<TabParamList, keyof TabParamList>;
      }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          let iconName: IconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Shorts':
              iconName = focused ? 'play' : 'play-outline';
              break;
            case 'Live':
              iconName = focused ? 'radio-sharp' : 'radio-outline';
              break;
            case 'Cart':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'Account':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textPrimary,
        tabBarButton: props => (
          <TouchableOpacity {...(props as any)} activeOpacity={1} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Shorts"
        component={ShortsFeed}
        options={{ tabBarLabel: 'Shorts Feed' }}
      />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
