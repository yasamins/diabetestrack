import Exponent from 'exponent';
import React from 'react';
import { View } from 'react-native';
import Login from './src/components/Login';

class App extends React.Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}
Exponent.registerRootComponent(App);
