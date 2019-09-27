import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import validator from 'validator'
import {Segment, Button, Input, Dropdown, Icon} from 'semantic-ui-react'
import api from '../../../api/'
import * as action from './../../../actions/loginAction.js';

const API = api();

import './style.css'

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            student: ["active", "changeble active"],
            club: ["", "changeble"],
            guest: ["", "changeble"],
            type: 'password',
            icon : 'eye'

        };
    }
    changeStateOfPass =() => {
        var newState = this.state;
        var isTextOrHide = (newState.type === 'password');
        newState.type = (isTextOrHide) ? 'text' : 'password';
        newState.icon = (isTextOrHide) ? 'eye slash' : 'eye';
        this.setState(newState)
    }
    changeAuthor = (author) => {
        let newState = {
            student: ["", "changeble"],
            club: ["", "changeble"],
            guest: ["", "changeble"]
        }
        newState[author] = ["active", "changeble active"]
        this.setState(newState)
    }
    formChange = (e,obj) => {
        const target = e.target
        if( obj['data-id'] === 'mail') {
            obj.value = obj.value.toLowerCase()
            obj.value = obj.value.split(' ').join('')
        }
        this.props.changeLoginFrom({
            field: obj['data-id'],
            data: obj.value
        })
    }
    submitLoginForm = (path) => {
        const login = this.props.loginForm

        const mail = login.mail ? validator.isEmail(login.mail) : 0
        const _id = login._id ? validator.isMongoId(login._id) : 0
        const password = validator.isLength(login.password,{min: 6, max: 15})
        if((mail || _id) && password) 
            this.props.thisGayIsCompletedForm(path)
        else {
            this.setState({
                msg: 'incomplete form'
            })
        }
    }
    componentWillMount() {
        API.get('/clubforlogin').then((data) => {
            this.setState({clubs: data.clubs})
        })
    }
    render() {
        console.log(this.state)
        const form = this.props.loginForm
        const clubOptions = this.state.clubs 
            ? this.state.clubs.map((data) => {
                return { key: data._id, value: data._id, text: data.name, image: { avatar: true, src: data.p_pic } }
            })
            : null
        return(
            <div className='loginpage' style={{textAlign:'center',color:'white',height: '100vh', width: '100vw', background:"rgb(90, 145, 152)"}}>
            <h3 style={{fontFamily:'Allura',fontSize:'7vw'}}>CollegeBuzzer</h3>
                <div className="madeSegment" style={{height: 'auto', width: '90vw',maxWidth: '700px', margin: 'auto'}} textAlign="center">
                    <div className="loginHeading" style={{display:'flex', justifyContent:'center', alignItems: 'center', cursor:'pointer'}}>
                        <div onClick={() => this.changeAuthor("student")} className={this.state.student[0]} style={{flexGrow: '1',}}>STUDENT</div>
                        <div onClick={() => this.changeAuthor("club")} className={this.state.club[0]} style={{flexGrow: '1',}}>CLUB</div>
                        <div onClick={() => this.changeAuthor("guest")} className={this.state.guest[0]} style={{flexGrow: '1',}}>GUEST</div>
                    </div>
                    <div className={this.state.student[1]}>
                        <h1 style={{fontFamily: 'Lobster',fontWeight: 300, fontSize: '40px',padding: '20px'}}>Student Login</h1>
                        <Input label="Email" value={form.mail} fluid type="text" data-id='mail' placeholder="email id" onChange={this.formChange}/><br/>
                        <Input label="password" icon={{ name: this.state.icon , link: true , onClick: this.changeStateOfPass}} type={this.state.type} fluid data-id='password' placeholder="Password"  onChange={this.formChange}/>
                        <a style={{cursor:'pointer'}} onClick={() => this.props.redirect('/register')}>Forget password?</a>
                  <Segment inverted fluid style={{padding: '5px'}}>Those who registered themselve but are not student of galgotia college are requested to login as guest.</Segment> 
                        <Button fluid inverted color="blue" onClick={() => this.submitLoginForm('student')}>submit</Button>
                    </div>
                    <div className={this.state.club[1]}>
                        <h1 style={{fontFamily: 'Lobster',fontWeight: 300, fontSize: '40px',padding: '20px'}} onClick={() => this.submitLoginForm('admin')}>Club Login</h1>
                        <Dropdown data-id='_id' placeholder='Select Club' fluid search selection options={clubOptions} style={{margin: '0 0 15px 0'}} onChange={this.formChange}/>
                        <Input label="password" icon={{ name: this.state.icon , link: true , onClick: this.changeStateOfPass}} type={this.state.type} fluid data-id='password' placeholder="Password"  onChange={this.formChange}/>
                        <a style={{cursor:'pointer'}} onClick={() => this.props.redirect('/register')}>Forget password?</a><br/><br/>              
                        <Button fluid inverted color="blue" onClick={() => this.submitLoginForm('club')}>submit</Button>
                    </div>
                    <div className={this.state.guest[1]}>
                        <h1 style={{fontFamily: 'Lobster',fontWeight: 300, fontSize: '40px',padding: '20px'}}>Guest Login</h1>
                        <Input label="Email" value={form.mail} fluid type="text" data-id='mail' placeholder="email id" onChange={this.formChange}/><br/>
                        <Input label="password" icon={{ name: this.state.icon , link: true , onClick: this.changeStateOfPass}} type={this.state.type} fluid data-id='password' placeholder="Password"  onChange={this.formChange}/>
                        
                        <a style={{cursor:'pointer'}} onClick={() => this.props.redirect('/register')}>Forget password?</a><br/><br/>               
                        <Button fluid inverted color="blue" onClick={() => this.submitLoginForm('guest')}>submit</Button>
                    </div>
                    {(this.state.msg)}
                    <center style={{marginTop: '20px'}}>
                    new? go to<a style={{cursor:'pointer',textDecoration: 'underline'}} onClick={() => this.props.redirect('/register')}> register</a>
                    </center>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginForm : state.login
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);