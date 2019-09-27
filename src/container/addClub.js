import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import validator from 'validator'
import {Segment, Button, Input} from 'semantic-ui-react'
import * as action from '../actions/actions';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        if(this.props.user.role !== "admin") {
            this.props.redirectTo('/login')
        }
    }
    formChange = (e,obj) => {
        console.log(obj, obj.value)
        this.props.changeaddClubFrom({
            field: obj['data-id'],
            data: obj.value
        })
    }
    submitLoginForm = (path) => {
        const login = this.props.addconf
        const mail = validator.isEmail(login.mail)
        const f_name = validator.isLength(login.f_name)
        if(mail && f_name) 
            this.props.shubhamHasCompletedAddClub(path)
        else {
            this.setState({
                msg: 'incomplete form'
            })
        }
    }
    render() {
        return(
            <div style={{height: '100%', width: 'auto', background:"#343450",paddingTop: '40px',}}>
                <Segment style={{height: 'auto', width: '100%',maxWidth: '700px', margin: 'auto'}} textAlign="center">
                <h1 style={{fontFamily: 'Lobster',fontWeight: 300, fontSize: '40px',padding: '20px'}}>Login Page</h1>
                <Input label="Email" fluid type="text" data-id='mail' placeholder="email id" onChange={this.formChange}/><br/>
                <Input label="Name" fluid type="text" data-id='name' placeholder="name"  onChange={this.formChange}/><br/>  
                <Input label="_id" fluid type="text" data-id='_id' placeholder="ids"  onChange={this.formChange}/><br/>            
                <Button fluid inverted color="blue" onClick={() => this.props.shubhamHasCompletedAddClub(this.props.addclub)}>submit</Button>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addclub : state.addclub,
        user: state.user
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);