import { StyleSheet,Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    avatarContainer:{
        paddingTop:60,
        alignItems:'center',
        justifyContent:'center',
    },
    avatarView:{
        alignItems:'center',
        justifyContent:'center'
    },
    nameContainer:{
        marginTop:30,
        backgroundColor:'transparent'
    },
    nameText:{
        fontSize:18, 
        color:'white', 
        fontWeight:'700'
    },
    aboutMeView:{
        flexDirection:'row',
        alignItems:'center', 
        width:width-150,
        marginTop:15,
    },
    lineSeperator:{
        flex:1,
        borderColor:'#696969',
        borderWidth:1,
      
        backgroundColor:'#696969'
    },
    aboutMeText:{
        color:'#696969',
        fontSize:16,
        fontWeight:'700'
    },
    detailsView:{
        flex:1,
        paddingHorizontal:10,
        paddingTop:10
    },
    rowContainer:{
        flexDirection:'row',
        marginRight:10,
    },
    iconView:{
        marginRight:10,
        justifyContent:'center',
        backgroundColor:'transparent'
    },
});

export default styles;