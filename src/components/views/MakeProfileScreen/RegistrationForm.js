import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import ComponentWrapper from './common/ComponentWrapper';
import LabelView from './common/LabelView';
import TextInputView from './common/TextInputView';
import DropDownMenu from './common/DropDownMenu';
import DatePicker from './common/DatePicker';

const RegistrationForm = (props)=>{
    return(
        <View>
            <ComponentWrapper>
                <LabelView label={'First Name :'} />
                <TextInputView value={props.firstName} type={'firstName'} onChangeText={props.onChangeText} />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Last Name :'} />
                <TextInputView value={props.lastName}  type={'lastName'}  onChangeText={props.onChangeText}  />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Date Of Birth :'} />
                <DatePicker 
                    value={props.DOB} 
                     _showDatePicker={props._showDatePicker}
                    _hideDatePicker={props._hideDatePicker}
                     _handleDatePicked={props._handleDatePicked}
                     isDateTimePickerVisible={props.isDateTimePickerVisible}    
                />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Gender :'} />
                <DropDownMenu value={props.gender} type={'gender'} selectGender={props.selectGender}/>
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Address Line 1 :'} />
                <TextInputView value={props.address1} type={'address1'} onChangeText={props.onChangeText}   />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Address Line 2 :'} />
                <TextInputView value={props.address2} type={'address2'} onChangeText={props.onChangeText}  />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'City :'} />
                <TextInputView value={props.city} type={'city'} onChangeText={props.onChangeText}   />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'State :'} />
                <TextInputView value={props.state} type={'state'} onChangeText={props.onChangeText}   />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Country :'} />
                <TextInputView value={props.country} type={'country'} onChangeText={props.onChangeText}   />
            </ComponentWrapper>
        </View>
    );
};

export default RegistrationForm;