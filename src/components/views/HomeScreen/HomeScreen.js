import React, { Component } from 'react';
import {
    View, 
    Text,
    Animated,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation'
import SpringView from './SpringView';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MakeProfile'})
  ]
})

const HomeScreen = ({ navigation }) => {
    return(
        <LinearGradient colors={['#E8CBC0', '#636FA4','green']} style={styles.container}>
            <StatusBar 
            translucent
             barStyle="light-content"
            />
            <SpringView>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.dispatch(resetAction)}>
                    <Text style={styles.buttonText}>Make Your Profile</Text>
                </TouchableOpacity>
            </SpringView>
        </LinearGradient>
    );
}

HomeScreen.navigationOptions = {
    header:null
};

export default HomeScreen;