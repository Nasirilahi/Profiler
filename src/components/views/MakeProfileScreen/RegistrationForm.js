import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
} from 'react-native';
import ComponentWrapper from './common/ComponentWrapper';
import LabelView from './common/LabelView';
import TextInputView from './common/TextInputView';

const RegistrationForm = (props)=>{
    console.log(props);
    return(
        <View>
            <ComponentWrapper>
                <LabelView label={'First Name :'} />
                <TextInputView value={props.firstName} />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Last Name :'} />
                <TextInputView value={props.lastName} />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Date Of Birth :'} />
                <TextInputView value={props.DOB} />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Gender :'} />
                <TextInputView value={props.gender} />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Address Line 1 :'} />
                <TextInputView value={props.address1} />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Address Line 2 :'} />
                <TextInputView value={props.address2} />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'City :'} />
                <TextInputView value={props.city} />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'State :'} />
                <TextInputView value={props.state} />
            </ComponentWrapper>
             <ComponentWrapper>
                <LabelView label={'Country :'} />
                <TextInputView value={props.country} />
            </ComponentWrapper>
        </View>
    );
};

export default RegistrationForm;