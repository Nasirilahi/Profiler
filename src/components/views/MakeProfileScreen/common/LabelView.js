import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const Label = ({label}) => {
    return(
        <View style={styles.labelContainer}>
            <Text style={styles.labelText}>{label}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    labelContainer:{
        flex:1,
        backgroundColor:'transparent',
        justifyContent:'center',
    },
    labelText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
    },
})
export default Label;