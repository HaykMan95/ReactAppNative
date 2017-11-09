import React from 'react';
import MapView from 'react-native-maps';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Button,
   Container,
   Left,
   Icon,
   Body,
   Right,
   Header,
   Title,
  } from 'react-native';
import MapScreen from '../screen/MapScreen.js';
import SecondScreen from '../screen/SecondScreen.js';
import Drawer from 'react-native-drawer'
import {DrawerNavigator} from 'react-navigation';

const DrawerExample = DrawerNavigator(
  {
    First: {
      path: '/',
      screen: MapScreen
    },
    Second: {
      path: '/sent',
      screen: SecondScreen
    },
  },
  {
    initialRouteName: 'First',
    drawerPosition: 'left'
  }
);

export default DrawerExample;
