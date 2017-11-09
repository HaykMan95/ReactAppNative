import React from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
   Text,
   View,
   Button,
  } from 'react-native';


export default class MapScreen extends React.Component {

  constructor(props) {
     super(props);
     this.state = {};
   }

  success = (pos) => {
    var crd = pos.coords;
    this.setState({
      latitude: crd.latitude,
      longitude: crd.longitude,
      initialRegion: {
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    })
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  };

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  findMe() {
      navigator.geolocation.getCurrentPosition(this.success, this.error, this.state.options);
  }

  render() {
    var view;
    this.findMe();
    if(this.state.initialRegion) {
      view =
      <MapView
        style={styles.map}
        initialRegion={this.state.initialRegion}>
        <MapView.Marker
          coordinate={
            {
              latitude: this.state.initialRegion.latitude,
              longitude: this.state.initialRegion.longitude,
            }
          }
        />
      </MapView>
    } else {
      view = <Text> Loading... </Text>
    }
    return (
      <View style={styles.container}>
       {view}
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
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  }
});
