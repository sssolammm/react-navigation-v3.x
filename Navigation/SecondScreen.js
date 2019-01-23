import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../Styles/Styles';

class SecondScreen extends Component{
    static navigationOptions =
    {
       title: 'SecondScreen',
    };
   
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={styles.text}>This is Second Screen Activity.</Text>
        </View>
      );
    }
}

export default SecondScreen;
