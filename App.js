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
   Route,
  } from 'react-native';
import MapScreen from './screen/MapScreen.js';
import SecondScreen from './screen/SecondScreen.js';
import Drawer from 'react-native-drawer'
import {DrawerNavigator} from 'react-navigation';
import MenuView from './menu/MenuView.js';



export default class App extends React.Component {

  render() {

    return (
    
        <MenuView />
    );
  }
}


// const styles = StyleSheet.create({
//   map: {
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     position: 'absolute',
//   }
// });
