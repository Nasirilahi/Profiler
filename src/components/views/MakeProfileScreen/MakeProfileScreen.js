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
import Button from './common/Button';
import Toast, {DURATION} from 'react-native-easy-toast'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './common/Header';
import { setProfile } from '../../../actions/profileActions';
import Icon from 'react-native-vector-icons/Ionicons';

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
            imageURL:'',
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
        this.setState({DOB: {value :date, isEmpty :false }});
        this._hideDatePicker();
    };
    _canSubmit = () => {
        const  {
            firstName,
            lastName,
            DOB,
            address1,
            city,
            state,
            country,
        } = this.state;

        if(!firstName.isEmpty && !lastName.isEmpty && !DOB.isEmpty && !address1.isEmpty && !city.isEmpty && !state.isEmpty && !country.isEmpty){
             return true;
        }
        else{
             return false ;
        }
    }
    onSubmit = () => {
        if(this._canSubmit()){
           this.props.setProfile(this.state);
           this.props.navigation.navigate('ShowProfile');
        }
        else{
            this._toast.show('All Fields are required except Address Line 2.',2000);
        }
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
                   <Header headerText={'Registration'} />
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
                    <Icon  name='ios-camera-outline' size={60} color='white'/>
                    <Button onSubmit={this.onSubmit} />
              </ScrollView>
                 <Toast 
                    style={{backgroundColor:'#F6B44A'}}  
                    ref={(toast) => this._toast = toast}
                 />
              </LinearGradient>
         );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setProfile: bindActionCreators(setProfile, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(MakeProfileScreen);