import React, { Component } from 'react';
import {
    View, 
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';

const TextInputView = ({value, type, onChangeText}) => {
    //console.log('value',value);
   return(
        <View style={styles.textInputContainer}>
            <TextInput 
                style={{height: 40, color:'grey'}}
                onChangeText={(text) => onChangeText(text,type)}
                value={value.value}
                autoCapitalize={'none'}
                autoCorrect={false}
            />
        </View>
   );
};

const styles = StyleSheet.create({
    textInputContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:2,
        borderColor:'grey',
        borderWidth:2,
        paddingLeft:4,
    },
})

export default TextInputView;