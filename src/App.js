import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import firebase from 'firebase';
import { Header } from './components/common';
import ProfileConf from './components/profileComponent/index';

class App extends Component {
  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyAGL4DQ_-sa0DQJIqW4aWMQiVrllnIyAzs',
  //     authDomain: 'authentication-fa090.firebaseapp.com',
  //     databaseURL: 'https://authentication-fa090.firebaseio.com',
  //     projectId: 'authentication-fa090',
  //     storageBucket: 'authentication-fa090.appspot.com',
  //     messagingSenderId: '635670782104'
  //   });
  // }
  
  render() {
    console.log('this is app component');
    return (
      <View>
        <Header>Authenticator</Header>
        <ProfileConf 
          _id='329ljdl3848' 
          themeshow='dayTripper'
          p_pic='https://s3.ap-south-1.amazonaws.com/photosfortheapp/profile/5b752c64177e935bf9db7fd6.jpg'
          name='Shubham Shinde' 
          userIntro='4th year IT' 
          bio='kuch bhi' 
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({ clubs: state.user.clubs });

// const matchDispatchToProps = (dispatch) => {
//   return bindActionCreators(action, dispatch);
// }
export default connect(mapStateToProps)(App);
