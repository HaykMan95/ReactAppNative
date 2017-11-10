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
   Title,
   Route,
  } from 'react-native'
import MapScreen from './screen/MapScreen.js'
import SecondScreen from './screen/SecondScreen.js'
import Drawer from 'react-native-drawer'
import {DrawerNavigator} from 'react-navigation'
import MenuView from './menu/MenuView.js'
import Header from './src/components/Header.js'
import SideMenu from 'react-native-side-menu'
import Menu from './src/components/Menu.js'
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      activeView: 'map'
    }
  }

  toggle() {
    this.setState(
      {
        isOpen: !this.state.isOpen
      }
    )
  }

  updateMenu(isOpen) {
    this.setState({isOpen});
  }

  changeMenu = (menu) => {
    console.log('menu change', menu)
    this.setState(
      {
        activeView: menu,
        isOpen: false
      }
    )
  }

  render() {
    var view;
    if(this.state.activeView === 'map') {
      view = <MapScreen />
    } else if(this.state.activeView === 'second') {
      view = <SecondScreen />
    }
    return (
      <View style={styles.map}>
        <SideMenu
          menu={<Menu changeMenu={this.changeMenu} activeMenu={this.state.activeView}/>}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
        >
          <Header toggle={this.toggle.bind(this)}/>
          {view}
        </SideMenu>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  }
});
