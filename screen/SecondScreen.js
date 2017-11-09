import React from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
   Text,
   View,
   Button,
   Image
  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Second',
    drawerIcon: ({tintColor}) => {
      return (
        <MaterialIcons
          name="change-history"
          size={24}
          style={{color: tintColor}}
        >
        </MaterialIcons>
      );
    }
  }

  render() {

    return (
      <View style={styles.container}>
       <Text style={{fontSize: 30, color: 'green'}}>
          Second Screen
       </Text>
       <Button
        style={styles.drawerBtn}
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Open DrawNavigator"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerBtn: {
    position: 'relative',
    left: 0,
    top: 0,
    height: 500,
  }
});
