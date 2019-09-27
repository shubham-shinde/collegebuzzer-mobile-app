import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import validator from 'validator'
import {Segment, Button, Input} from 'semantic-ui-react'
import * as action from '../../actions/actions';
class Login extends React.Component{
    render() {
        return(
            <div style={{ display: 'none', height: '100vh', width: '100vw', background:"rgba(87, 87, 98, 0.67)",paddingTop: '40px',position:'absolute',top:'0',left:'0',zIndex:2}}>
                <Segment style={{height: 'auto', width: '90vw',maxWidth: '700px', margin: 'auto',position:'absolute',top:'50%',left:'50%', transform: "translate(-50%,-50%"}} textAlign="center">
                <h1 style={{fontFamily: 'Lobster',fontWeight: 300, fontSize: '40px',padding: '20px'}} onClick={() => this.submitLoginForm('admin')}>Login Page</h1>
                <h3>{'kldjdslgjdsklgj djlk jsdgklds jj; sdklvj'}</h3>
                <Button fluid inverted color="blue">submit</Button>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Message : state.message
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);