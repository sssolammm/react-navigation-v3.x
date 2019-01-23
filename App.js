import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import SecondScreen from './Navigation/SecondScreen';
import styles from './Styles/Styles';
 
class HomeScreen extends Component{
  static navigationOptions =
  {
     title: 'HomeScreen',
  };
 
  gotoNextActivity = () =>
  {
     this.props.navigation.navigate('Second');
  }
 
  render() {
 
    return (
 
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Home Screen Activity.</Text>
        <Button onPress = { this.gotoNextActivity } title = 'Open Second Activity'/>
      </View>
    );
  }
}
 

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen
  },
  {
    initialRouteName: "Home"
  }
);
 
export default createAppContainer(RootStack);
 
