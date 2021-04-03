import React from "react";
import Main from "./components/main";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/home';

export type RootStackParamList = {
  Home: undefined;
  Main: undefined;
};

// Stack
const Stack = createStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

// Tab
const Tab = createBottomTabNavigator<RootStackParamList>();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={RootStackNavigation} />
      <Tab.Screen name="Main" component={Main} />
    </Tab.Navigator>
  );
};

export const MainBottomTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Main" component={Main} />
    </Tab.Navigator>
  );
};


// Drawer
const Drawer = createDrawerNavigator<RootStackParamList>();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomTabNavigation} />
      <Drawer.Screen name="Main" component={MainBottomTabNavigation} />
    </Drawer.Navigator>
  );
};

