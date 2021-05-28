import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FaceBookTransaction from './screens/FaceBookTransaction'
import InstagramTransaction from './screens/InstagramTransaction'

export default class App extends React.Component {
  render(){

  
  return <AppContainer/>
  }
  
}
const TabNavigator=createBottomTabNavigator({
  FaceBook:{screen:FaceBookTransaction}, 
  Search:{
    screen:InstagramTransaction
  }
})
const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
