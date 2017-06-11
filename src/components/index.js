import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Routes from '../routes/Routes';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import HomeScree from '../components/views/HomeScreen';
const AppNavigator = StackNavigator({
    ...Routes,
    Home : { screen: HomeScree },
},{
    initialRouteName: 'Home',
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