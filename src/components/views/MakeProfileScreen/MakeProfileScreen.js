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
import { MenuContext } from 'react-native-menu';

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
                value:'Male',
                isEmpty:false,
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
            isDateTimePickerVisible:false,
        }
    }

    onChangeText = (text, type) => {
        if(text.trim().length !==0){
            this.setState({[type]:{ value: text, isEmpty: false }});
        }
        else{
            this.setState({[type]:{ value: '', isEmpty: true }})
        }
    };

    selectGender = (value,type) => {
       this.setState({[type]:{ value, isEmpty: false }});
    };

    _showDatePicker = () => this.setState({ isDateTimePickerVisible: true });
    
    _hideDatePicker = () => this.setState({ isDateTimePickerVisible: false });
 
    _handleDatePicked = (date, ) => {
        // console.log('A date has been picked: ', date);
        this.setState({DOB: {value :date, isEmpty :false }});
        this._hideDatePicker();
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
                  <LinearGradient 
                        colors={['green','red']} 
                        style={{borderColor:'red',borderWidth:1,alignItems:'center',justifyContent:'center',backgroundColor:'transparent',marginHorizontal:20,marginBottom:15,}}
                    >
                  <Text style={{fontSize:28,fontWeight:'700', color:'white'}}>{'Registration'}</Text>
                  </LinearGradient>
                    <MenuContext style={{ flex: 1 }}>
                         <RegistrationForm 
                            {...this.state} 
                            onChangeText={this.onChangeText} 
                            selectGender={this.selectGender}
                            _showDatePicker={this._showDatePicker}
                            _hideDatePicker={this._hideDatePicker}
                            _handleDatePicked={this._handleDatePicked}
                         />
                    </MenuContext>   
              </ScrollView>
              </LinearGradient>
         );
    }
}


export default MakeProfileScreen;