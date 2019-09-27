import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo';
import * as action from '../actions/actions';
import ls from '../services/ls-service';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    // await ls().remove();
    //eslint-disable-next-line max-len
    // await ls().set('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjViNzM0MGNiZDdiOWM3MDcxZTIyOGM5NCIsInJvbGUiOiJzdHVkZW50IiwiYnJhbmNoIjoiSVQiLCJ5ZWFyIjoxNiwiaWF0IjoxNTM0NTEyMDQyfQ.CdTiPtEUFAAgqw4hu2wZkolE5i1rbniCJCcTKkAWswo');
    const userToken = await ls().get();
    console.log(userToken);
    if (userToken) {
      this.props.checkForTheToken(userToken);
      this.props.getBasicInfo();
    }
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  };

  render() {
    return (
      <LinearGradient
          style={{
              flex: 1,
              flexDirection: 'column',
              padding: 100
          }}
          colors={['#008081', '#004444']}
      >
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(AuthLoadingScreen);
