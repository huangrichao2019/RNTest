/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={styles.container}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 841584, padding: 15, fontSize: 50}}>
          Home Screen
          </Text>
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            title="进入详情页"
            onPress={() => this.props.navigation.push('Details')}
          />
          <Button
            title="进入测试页"
            onPress={() => this.props.navigation.push('TestPage')}
          />
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
