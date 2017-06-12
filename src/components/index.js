import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import HomeScreen from '../components/views/HomeScreen';
import MakeProfileScreen from '../components/views/MakeProfileScreen';
import ShowProfileScreen from '../components/views/ShowProfileScreen';
import { BackHandler } from 'react-native';

const AppNavigator = StackNavigator({
    Home : { screen: HomeScreen },
    MakeProfile: { screen: MakeProfileScreen },
    ShowProfile: { screen: ShowProfileScreen },
},{
    initialRouteName: 'Home',
    mode: 'modal'
}
)

export default class Profiler extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}