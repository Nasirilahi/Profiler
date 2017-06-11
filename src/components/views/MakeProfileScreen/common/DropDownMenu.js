import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Menu, {
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

const renderTouchable = () => <TouchableOpacity/>;

const DropDownMenu = ({value, type, selectGender}) =>{
    return(
        <View style={styles.menuView}>
             <Menu onSelect={(value) => selectGender(value,type)}>
                    <MenuTrigger  renderTouchable={renderTouchable} style={styles.menuTrigger}>
                        <Text style={styles.menuText}>{value.value.toUpperCase()}</Text>
                         <Icon  name='caret-down' size={20} color='grey'/>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption style={{borderBottomColor:'grey',borderBottomWidth:1,}} value='male'>
                            <Text style={styles.menuOpetionsText}>Male</Text>
                        </MenuOption>
                        <MenuOption value='female'>
                            <Text style={styles.menuOpetionsText}>Female</Text>
                        </MenuOption>
                    </MenuOptions>
            </Menu>
        </View>
    );
}

const styles = StyleSheet.create({
    menuView:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:2,
        borderColor:'grey',
        borderWidth:2,
    },
    menuTrigger:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:6,
    },
    menuText:{
        fontSize:16,
        fontWeight:'bold',
        color:'grey'
    },
    menuOpetionsText:{
        color:'grey'
    }
});

export default DropDownMenu;