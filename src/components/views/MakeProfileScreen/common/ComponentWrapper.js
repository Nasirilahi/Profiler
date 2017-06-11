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
        <View style={[styles.wrapperContainer, {flexDirection: width < 375 ? 'column': 'row', height: width < 375 ? 80 : 40  }]}>
            {
                props.children
            }
        </View>
    );
};

const styles = StyleSheet.create({
    wrapperContainer:{
        marginHorizontal:20,
        marginVertical:10,
    },
});

export default ComponentWrapper;