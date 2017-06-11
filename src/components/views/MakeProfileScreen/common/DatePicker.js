import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const DatePicker = ({
    _showDatePicker,
    _hideDatePicker,
    _handleDatePicked,
    isDateTimePickerVisible,
    value:{value ,isEmpty }
}) => {
    return(
        <View style={styles.datePickerView}>
            <TouchableOpacity style={styles.datePickerContainer} onPress={_showDatePicker}>
                { isEmpty ? <Text style={styles.datePickerText}>Date of Birth</Text> : <Text style={styles.datePickerText}>{moment(value).format('L')}</Text> }
                <Icon  name='caret-down' size={20} color='grey'/>
            </TouchableOpacity>
            <DateTimePicker
                isVisible={isDateTimePickerVisible}
                onConfirm={_handleDatePicked}
                onCancel={_hideDatePicker}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    datePickerView:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:6,
        backgroundColor:'white',
        borderRadius:2,
        borderColor:'grey',
        borderWidth:2,
    },
    datePickerContainer:{ 
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    datePickerText:{
        fontSize:16,
        fontWeight:'600',
        color:'grey',
    },
});

export default DatePicker;