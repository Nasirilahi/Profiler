import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30,
    },
    buttonContainer:{
        width: 250, 
        height: 50, 
        backgroundColor: 'powderblue',
        borderRadius: 15,
    },
    buttonText:{
        fontSize: 22, 
        textAlign: 'center',
         margin: 10
    },
    registrationTextView:{
        paddingVertical:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent',
        marginHorizontal:20,
        marginBottom:15,
    },
    registrationText:{
        fontSize:28,
        fontWeight:'700',
         color:'white'
    },
    cameraView:{
        alignItems:'center',
        backgroundColor:'transparent'
    },
});

export default styles;