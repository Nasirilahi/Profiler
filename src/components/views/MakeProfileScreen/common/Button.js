import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width } = Dimensions.get('window');

const Button = ({onSubmit}) => {
    return(
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonView} onPress={onSubmit}>
                 <LinearGradient 
                        colors={['#F7971E','#FFD200', ]} 
                        style={styles.linearView}
                         start={{x: 0.0, y: 0.25}} 
                         end={{x: 0.5, y: 1.0}}
                    >
                         <Text style={styles.buttonText}>{'Submit'}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    buttonContainer:{
       backgroundColor:'transparent',
       alignItems:'center',
       marginVertical:10,
    },
    buttonView:{
        width:width-40,
        borderRadius:5,
    },
    linearView:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent',
        paddingVertical:10,
         borderRadius:5,
    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:'900'
    },
})
export default Button;

// 