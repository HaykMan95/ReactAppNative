import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = props => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => props.toggle()}>
      <Icon
        name="bars"
        color="red"
        size={25}
      />
    </TouchableWithoutFeedback>
    <Text style={{color: 'red'}}> MY App </Text>
    <Icon
      name="search"
      color="red"
      size={25}
    />
  </View>
)

const styles= StyleSheet.create(
  {
    container: {
      flexDirection: 'row',
      height: 100,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'black',
      marginHorizontal: 0
    }
  }
)

export default Header
