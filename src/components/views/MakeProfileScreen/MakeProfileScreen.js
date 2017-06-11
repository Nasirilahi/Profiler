import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import RegistrationForm from './RegistrationForm';


class MakeProfileScreen extends Component {
    static navigationOptions = {
        header:null,
    }
    constructor(){
        super();
        this.state = {
            firstName:{
                value:'',
                isEmpty:true,
            },
            lastName:{
                value:'',
                isEmpty:true,
            },
            DOB:{
                value:'',
                isEmpty:true,
            },
            gender:{
                value:'',
                isEmpty:true,
            },
            address1:{
                value:'',
                isEmpty:true,
            },
            address2:{
                value:'',
            },
            city:{
                value:'',
                isEmpty:true,
            },
            state:{
                value:'',
                isEmpty:true,
            },
            country:{
                value:'',
                isEmpty:true,
            },
        }
    }

    onChangeText = (text, fieldType) => {
        this.setState({[fieldType]:{ value: text, isEmpty: false }});
    };

    render(){
         return(
              <LinearGradient 
                colors={['#80d0c7','#13547a']} 
                style={styles.container}
                start={{x: 0.0, y: 0.25}} 
                end={{x: 0.5, y: 1.0}}
              >
              <ScrollView>
                   <RegistrationForm {...this.state} onChangeText={this.onChangeText} />   
              </ScrollView>
              </LinearGradient>
         );
    }
}


export default MakeProfileScreen;