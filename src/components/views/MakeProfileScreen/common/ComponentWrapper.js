import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const ComponentWrapper = (props) => {
    return(
        <View style={[styles.wrapperContainer, {flexDirection: width < 375 ? 'column': 'row', height: width < 375 ? 80 : 40, marginVertical:width < 375 ? 0 : 10   }]}>
            {
                props.children
            }
        </View>
    );
};

const styles = StyleSheet.create({
    wrapperContainer:{
        marginHorizontal:20,
    },
});

export default ComponentWrapper;