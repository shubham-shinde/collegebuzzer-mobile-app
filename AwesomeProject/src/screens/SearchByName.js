import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import ProfileIntroComponent from '../components/profileComponent/profileIntroComponent';
import * as action from '../actions/actions';

const styles = StyleSheet.create({
    input: {
        height: 50,
        backgroundColor: 'transparent',
        fontSize: 20,
        margin: 10,
        color: 'black'
    },
});

class Search extends React.Component {
    static navigationOptions = {
        title: 'Search By Name',
    }
    onChange = (value) => {
        this.props.searchString(value);
    }
    openProfile = (id) => {
        this.props.navigation.navigate('Profile', { id });
    }
    result = (data) => {
        const { name, p_pic, userIntro, _id } = data;
        console.log(_id);
        return (
            <ProfileIntroComponent 
                name={name} 
                pic={p_pic} 
                userIntro={userIntro} 
                _id={_id}
                profile={this.openProfile}
            />
        );
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={this.onChange}
                        placeholder='Email address' 
                        placeholderTextColor='rgba(225,225,225,0.7)'
                    />
                    {this.props.search.isFetching && <ActivityIndicator />}
                    {
                        this.props.search.result.length > 0 
                        ? this.props.search.result.map(this.result) 
                        : null
                    }
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ search: state.search });

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Search);
