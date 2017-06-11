import React, { Component } from 'react';
import {
    View, 
    Text
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
    return(
        <LinearGradient colors={['#E8CBC0', '#636FA4','red','green']} style={styles.container}>
           
        </LinearGradient>
    );
}

HomeScreen.navigationOptions = {
    header:null
};

export default HomeScreen;