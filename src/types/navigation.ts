import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

/**
 * Bottom Tab Navigator Param List
 */
export type BottomTabParamList = {
  Home: undefined;
  Shorts: undefined;
  Live: undefined;
  Cart: undefined;
  Account: undefined;
};

/**
 * App Stack Navigator Param List
 */
export type AppStackParamList = {
  HomeTab: undefined;
  Search: undefined;
};

/**
 * Root Stack Navigator Param List
 */
export type RootStackParamList = {
  Root: undefined;
};

/**
 * Type helper to extract route names from param lists
 */
export type RootStackRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type AppStackRouteProp<T extends keyof AppStackParamList> = RouteProp<
  AppStackParamList,
  T
>;

export type BottomTabRouteProp<T extends keyof BottomTabParamList> = RouteProp<
  BottomTabParamList,
  T
>;

/**
 * Screen props types for Root Stack Navigator
 */
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

/**
 * Screen props types for App Stack Navigator
 */
export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

/**
 * Screen props types for Bottom Tab Navigator
 */
export type BottomTabScreenPropsType<T extends keyof BottomTabParamList> =
  BottomTabScreenProps<BottomTabParamList, T>;

/**
 * Composite navigation prop types for nested navigators
 */
export type AppNavigationProp<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>['navigation'];

export type BottomTabNavigationProp<T extends keyof BottomTabParamList> =
  BottomTabScreenProps<BottomTabParamList, T>['navigation'];

/**
 * Navigation prop type for App Stack Navigator
 */
export type AppStackNavigationProp<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>['navigation'];

/**
 * Declaration for useNavigation hook type safety
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
