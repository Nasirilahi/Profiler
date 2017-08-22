import React, { Component } from 'react';
import {
    View, 
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})

const TitleValue = ({label, value}) => {
    return(
          <View style={{flex:1,backgroundColor:'transparent',paddingLeft:10,paddingVertical:10, borderBottomColor:'#696969', borderBottomWidth:1}}>
                <View><Text style={{fontSize:16,color:'#13547a', fontWeight:'600',}}>{label}</Text></View>
                <View style={{marginTop:5,}}><Text style={{fontSize:18,color:'#696969', fontWeight:'800',}}>{`${value}`}</Text></View>
         </View>
    )
}

class ShowProfileScreen extends Component {
    static navigationOptions = {
        header :null
    };
    navigateToHome = () =>{
        this.props.navigation.dispatch(resetAction);
    };
    render(){
        console.log('props',this.props);
         // const {profile:{data:{
         //       firstName,
         //        lastName,
         //        DOB,
         //        gender,
         //        address1,
         //        address2,
         //        city,
         //        state,
         //        country,
         //        imageURL,
         // }}} = this.props;
        const {
            navigation:{
                state:{
                    params:{
                        user:{
                            firstName,
                            lastName,
                            DOB,
                            gender,
                            address1,
                            address2,
                            city,
                            state,
                            country,
                            imageURL,
                        }
                    }
                }
            }
        } = this.props;
         return(
            <LinearGradient 
                colors={['#13547a','white']} 
                style={styles.container}
              >
               <View style={styles.avatarContainer}>
                   <View style={{position:'absolute', backgroundColor:'transparent',right:25, top:20}}>
                        <TouchableOpacity onPress={this.navigateToHome} ><Icon2  name='home' size={30} color='white' /></TouchableOpacity>
                   </View>
                   <View style={styles.avatarView}>
                       <Image source={imageURL} style={{width:120,height:120,borderRadius:60, borderColor:'#13547a',borderWidth:5,}} />
                   </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>{`${firstName.value} ${lastName.value}`}</Text>
                    </View>
                    <View style={styles.aboutMeView}>
                        <View style={styles.lineSeperator}></View>
                        <View style={{backgroundColor:'transparent'}}><Text style={styles.aboutMeText}>{'About Me'}</Text></View>
                        <View style={styles.lineSeperator}></View>
                    </View>
               </View>
               <ScrollView>
                    <View style={styles.detailsView}>
                            <View style={styles.rowContainer}>
                                <View style={styles.iconView}>
                                {
                                    gender.value === 'male' 
                                    ?
                                        <Icon name={'ios-male-outline'} size={30} color='#696969' style={{fontWeight:'bold'}} />
                                    :
                                        <Icon name={'ios-female-outline'} size={30} color='#696969' style={{fontWeight:'bold'}} />
                                }
                                
                            </View>
                            <TitleValue label={'Gender'} value={gender.value.toUpperCase()} />
                        </View>
                            <View style={styles.rowContainer}>
                            <View style={styles.iconView}>
                                <Icon name={'md-calendar'} size={30} color='#696969' style={{fontWeight:'bold'}} />          
                            </View>
                                <TitleValue label={'Date Of Birth'} value={moment(DOB.value).format('DD MMMM YYYY')} />
                        </View>
                            <View style={styles.rowContainer}>
                            <View style={styles.iconView}>
                                <Icon2 name={'address-card'} size={20} color='#696969' style={{fontWeight:'bold'}} />          
                            </View>
                            <TitleValue label={'Address'} value={`${address1.value} ${address2.value}`} />
                        </View>
                            <View style={styles.rowContainer}>
                            <View style={styles.iconView}>
                                <Icon2 name={'building'} size={20} color='#696969' style={{fontWeight:'bold'}} />          
                            </View>
                            <TitleValue label={'City'} value={`${city.value}`} />
                        </View>
                            <View style={styles.rowContainer}>
                            <View style={styles.iconView}>
                                <Icon2 name={'flag-o'} size={20} color='#696969' style={{fontWeight:'bold'}} />          
                            </View>
                            <TitleValue label={'State'} value={`${state.value}`} />
                        </View>
                            <View style={styles.rowContainer}>
                            <View style={styles.iconView}>
                                <Icon2 name={'globe'} size={20} color='#696969' style={{fontWeight:'bold'}} />          
                            </View>
                            <TitleValue label={'Country'} value={`${country.value}`} />
                        </View>
                    </View>
               </ScrollView>
            </LinearGradient>
        );
    }
}

const mapStateToProps = ({ profile }) => ({profile});

export default connect(mapStateToProps)(ShowProfileScreen);