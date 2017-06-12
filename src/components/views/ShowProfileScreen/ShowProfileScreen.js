import React, { Component } from 'react';
import {
    View, 
    Text
} from 'react-native';
import { connect } from 'react-redux';

class ShowProfileScreen extends Component {
    render(){
        //console.log('props',this.props)
         return(
            <View>
                <Text>{'ShowProfileScreen '}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ profile }) => ({profile});

export default connect(mapStateToProps)(ShowProfileScreen);