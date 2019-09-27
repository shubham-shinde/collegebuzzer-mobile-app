import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native';
// import * as action from '../actions/actions';
// import Confession from '../components/confessionComponent';
import { MoreCard } from '../components/style/';
import LS from '../services/ls-service';

class MoreScreen extends React.Component {
    static navigationOptions = {
        title: 'More',
    }
    logout = () => {
        const { navigation } = this.props;
        LS().remove().then(() => {
            navigation.navigate('Auth');
        });
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <MoreCard 
                    nav={() => navigation.navigate('SearchByName')} 
                    type='Search' 
                    iconName='search' 
                    color='teal'
                />
                <MoreCard 
                    nav={() => navigation.navigate('ClubList')} 
                    type='Clubs' 
                    iconName='people' 
                    color='orange'
                />
                <MoreCard 
                    nav={() => navigation.navigate('Profile')} 
                    type='My Profile'
                    iconName='person' 
                    color='#2EC6ED'
                />
                <MoreCard 
                    nav={() => navigation.navigate('Edit')} 
                    type='Edit Profile'
                    iconName='face' 
                    color='#67BC29'
                />
                <MoreCard 
                    nav={() => console.log('Feedback')} 
                    type='Feedback' 
                    iconName='chat-bubble'
                    color='#0A4BB3'
                />
                <MoreCard 
                    nav={this.logout} 
                    type='Logout' 
                    iconName='power-settings-new'
                    color='#FF322B' 
                />
            </ScrollView>
        );
    }
}

// const mapStateToProps = (state) => ({ confs: state.confs });

// const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default MoreScreen;

