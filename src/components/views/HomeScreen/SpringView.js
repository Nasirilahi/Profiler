import React, { Component } from 'react';
import {
    Animated,
} from 'react-native'

export default class SpringView extends React.Component {
  constructor () {
  super()
  this.springValue = new Animated.Value(0.3)
};

componentDidMount(){
  this.spring();
}

spring = () => {
  this.springValue.setValue(0.3)
  Animated.spring(
    this.springValue,
    {
      toValue: 1,
      friction: 1
    }
  ).start()
}


  render() {
    return (
      <Animated.View                 
        style={{
          ...this.props.style,
          transform: [{scale: this.springValue}] 
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
