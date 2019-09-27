import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, TouchableHighlight } from 'react-native';
import ClubProfileComponent from '../components/profileComponent/clubIntroComponent';
import * as action from '../actions/actions';

// const styles = StyleSheet.create({
//     input: {
//         height: 50,
//         backgroundColor: 'transparent',
//         fontSize: 20,
//         margin: 10,
//         color: 'black'
//     },
// });

class ClubList extends React.Component {
    static navigationOptions = {
        title: 'Club List',
    }
    render() {
        const { clubs, navigation } = this.props;
        const C = clubs ? clubs.map((data) => (
            <TouchableHighlight 
                onPress={() => navigation.navigate('Profile', { id: data._id })}
            >
                <ClubProfileComponent 
                    _id={data._id} 
                    themeshow={data.theme} 
                    pic={data.p_pic} 
                    name={data.name} 
                    userIntro={data.userIntro} 
                    bio={data.bio} 
                />
            </TouchableHighlight>
        ))
        : null;
        return (
            <ScrollView>
                {clubs ? C.reverse() : null}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({ clubs: state.user.clubs });

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(ClubList);
