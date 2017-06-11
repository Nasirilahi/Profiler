import React, { Component } from 'react';
import {
    View, 
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';

const TextInputView = ({value}) => {
    //console.log('valuevalue',value)
   return(
        <View style={styles.textInputContainer}>
            <TextInput placeholder={'value'}  value={value.value}/>
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