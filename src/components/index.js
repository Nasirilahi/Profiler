import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import HomeScreen from '../components/views/HomeScreen';
import MakeProfileScreen from '../components/views/MakeProfileScreen';
import ShowProfileScreen from '../components/views/ShowProfileScreen';

const AppNavigator = StackNavigator({
    Home : { screen: HomeScreen },
    MakeProfile: { screen: MakeProfileScreen },
    ShowProfile: { screen: ShowProfileScreen },
},{
    initialRouteName: 'MakeProfile',
    mode: 'card'
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