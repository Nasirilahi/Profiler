import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';

const Header = ({headerText})=> {
    return(
        <LinearGradient 
                         colors={['#30E8BF','#FF8235', ]} 
                        style={styles.registrationTextView} 
                        start={{x: 0.0, y: 0.25}} 
                         end={{x: 0.5, y: 1.0}}
                    >
                  <Text style={styles.registrationText}>{headerText}</Text>
                  </LinearGradient>
    );
};

export default Header;