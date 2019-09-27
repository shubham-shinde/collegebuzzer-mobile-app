import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../../../actions/registerActions';
import validator from 'validator'
import { Icon, Input,Form, Select, Checkbox, Segment } from 'semantic-ui-react'
import './style.css';


class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          bodyStyle: {minHeight: '100vh', minWidth: '100vw', backgroundColor: 'rgb(67, 161, 161)'},
          socialCSS: {display: 'block'},
          detailsCSS: {display: 'none'},
          doneCSS: {display: 'none'},
          socialPClass: 'ui big teal button disabled',
          detailClass: 'ui big  button black disabled',
          doneClass: 'ui big  button black disabled',

        };
    }
    changeType = (e, value) => {
      this.props.changTypeOfRgistrationForm(value.checked ? 'stu' : 'guest')
    }
    submit = (e, path) => {
        e.preventDefault()
        const form = this.props.register
        const mail = validator.isEmail(form.mail)
        const LastSpaceOnName = (form.name[form.name.length-1] !== ' ')
        const newState = {...this.state}
        
        if(path === "student") {
            const id = validator.contains(form.clgId, 'GCEB');
            const sec = form.year > 1 ? form.sec !== 'C': true;
            
            if(id && LastSpaceOnName && mail && sec) {
              this.props.thisGayIsCompletedForm(path);
              newState.bodyStyle = {minHeight: '100vh', minWidth: '100vw', backgroundColor: '#0009ff96'}
              newState.detailsCSS = {display: 'none'}
              newState.doneCSS = {display: 'block'}
              newState.detailClass = 'ui big black  button disabled'
              newState.doneClass = 'ui big teal button disabled'
              this.setState(newState);
            }
            else if (!mail) {
              newState.msg3 = "Please check your Mail."
              this.setState(newState)
            }
            else if(!LastSpaceOnName) {
              newState.msg3 = "In name remove the space on last letter."
              this.setState(newState)
            }
            else if(!id) {
              newState.msg3 = "wrong addmission id. If you are not galgotian uncheck the checkbox"
              this.setState(newState)
            }
            else if(!sec) {
              newState.msg3 = "C section is only for first year students"
              this.setState(newState)
            }
        }
        else if (path === 'guest') {
          if(mail && LastSpaceOnName) {
            this.props.thisGayIsCompletedForm(path);
            newState.bodyStyle = {minHeight: '100vh', minWidth: '100vw', backgroundColor: '#0009ff96'}
            newState.socialCSS = {display: 'none'}
            newState.doneCSS = {display: 'block'}
            newState.socialPClass = 'ui big black  button disabled'
            newState.doneClass = 'ui big teal button disabled'
            this.setState(newState);
          }
          else if (!mail) {
            newState.msg3 = "Please check your Mail."
            this.setState(newState)
          }
          else if(!LastSpaceOnName) {
            newState.msg3 = "In name remove the space on last letter."
            this.setState(newState)
          }
          
        }
        else {
          newState.msg3 = "check above credentials again."
          this.setState(newState)
        }
    }

    clickDone = () => {
        this.props.clickOnDone();
    }

    onFormChange=(e, obj) => {
      if( obj['data-id'] === 'mail') {
        obj.value = obj.value.toLowerCase()
        obj.value = obj.value.split(' ').join('')
      }
      else if( obj['data-id'] === 'name') {
        obj.value = obj.value.toLowerCase()
        obj.value = (obj.value.length <= 30) ? obj.value : obj.value.slice(0,30)
        obj.value = obj.value.charAt(0).toUpperCase() + obj.value.slice(1);
        obj.value = obj.value.charAt(0) === " " ? obj.value.slice(1) : obj.value
        obj.value = obj.value.split(' ').length > 3 ? obj.value.split(' ').slice(0, 3).join(' ') : obj.value
      }
      else if( obj['data-id'] === 'clgId') {
        obj.value = (obj.value.length <= 11) ? obj.value : obj.value.slice(0,11)
        obj.value = obj.value.toUpperCase().split(' ').join('');
      }
      else if( obj['data-id'] === 'dob') {
        obj.value = (new Date(obj.value)).toISOString();
      }
      if(obj) {
        this.props.changeRegisterFrom({
          field: obj['data-id'],
          data: obj.value
        })
      }
      else {
        this.props.changeRegisterFrom({
          field: e.target.parentElement.getAttribute('data-id'),
          data: e.target.value
        })
      }
      

    }
    // next1 = (e) => {

    //   e.preventDefault();
    //   const form = this.props.register
    //   const mail = validator.isEmail(form.mail)
    //   const m_no = validator.isMobilePhone(form.m_no,'en-IN')

    //   const newState = {...this.state}
    //   if (mail || m_no) {
    //     newState.bodyStyle = {minHeight: '100vh', minWidth: '100vw', backgroundColor: '#06000a'}
    //     newState.accountCSS = {display: 'none'}
    //     newState.socialCSS = {display: 'block'}
    //     newState.accountSClass = 'ui big basic teal button disabled'
    //     newState.socialPClass = 'ui big basic blue button'
    //     newState.msg1 = null
    //     this.setState(newState);
    //   }
    //   else {
    //     newState.msg1 = "check above credentials again."
    //     this.setState(newState)
    //   }

      
    // }
    next2 = (e) => {
      e.preventDefault();
      const form = this.props.register
      const newState = {...this.state}
      if (1) {
        newState.bodyStyle = {minHeight: '100vh', minWidth: '100vw', backgroundColor: 'rgb(177, 117, 117)'}
        newState.socialCSS = {display: 'none'}
        newState.detailsCSS = {display: 'block'}
        newState.detailClass = 'ui big button teal disabled'
        newState.socialPClass = 'ui big button black disabled'
        newState.msg2 = null;
        this.setState(newState);
      }
      else {
        newState.msg2 = "check above credentials again."
        this.setState(newState)
      }
    }
    // prev1 = (e) => {
    //   e.preventDefault();
    //   const newState = {...this.state}
    //   newState.bodyStyle = {minHeight: '100vh', minWidth: '100vw', backgroundColor: '#251605'}
    //   newState.accountCSS = {display: 'block'}
    //   newState.socialCSS = {display: 'none'}
    //   newState.accountSClass = 'ui big basic teal button'
    //   newState.socialPClass = 'ui big basic blue button disabled'
    //   this.setState(newState);
    // }    
    prev2 = (e) => {
      e.preventDefault();
      const newState = {...this.state}
      newState.bodyStyle = {minHeight: '100vh', minWidth: '100vw', backgroundColor: 'rgb(67, 161, 161)'}
      newState.socialCSS = {display: 'block'}
      newState.detailsCSS = {display: 'none'}
      newState.detailClass = 'ui big  button black disabled'
      newState.socialPClass = 'ui big teal button disabled'
      this.setState(newState);
    }
    render() {
      const gu = (this.props.register.type === 'guest')
      const form = this.props.register
      return(
        <div style={{...this.state.bodyStyle, textAlign:'center'}}>
        <h3 style={{fontFamily:'Allura',fontSize:'7vw',color:'white',margin:'auto'}}>CollegeBuzzer</h3>
        <div className="ui centered  grid container registration">
          <div className="ui text container">
            <div className="four ui k buttons center aligned grid container" style={{margin: 15}}>
              <button className={this.state.socialPClass} id="socialP">
                <div className="content" style={{fontSize: 12, color: 'white'}}>PERSONAL DETAILS</div>
              </button>
              {!gu ? (<button className={this.state.detailClass} id="details">
                <div className="content" style={{fontSize: 12, color: 'white'}}>COLLEGE DETAILS</div>
              </button>) : null}
              <button className={this.state.doneClass} id="details">
                <div className="content" style={{fontSize: 12, color: 'white'}}>MAIL</div>
              </button>
            </div>
            <div id="social" className="main3div" style={this.state.socialCSS}>
              <div className="ui center aligned segment" id="signUpBox" style={{backgroundColor: 'rgba(0, 0, 0, 0.37)', borderRadius: 5}}>
                <div className="ui centered">
                  <h1 className="font" style={{color: 'white',marginBottom: '20px'}}>Personal Details</h1>
                </div>
                <Form className="ui form">
                  <Input label='Email' value={form.mail} fluid onChange={this.onFormChange} data-id="mail" iconPosition='left' placeholder="Email(xyz@email.com)"/><br/>
                  <Input label='Full Name' value={form.name} fluid onChange={this.onFormChange} data-id="name" iconPosition='left' placeholder='Write Your Full Name'/><br/>
                  <div style={{display:'flex'}}>
                    <label htmlFor="genderR" className="ui label">Gender</label>
                    <Select label='Gender' value={form.gen} id='genderR' fluid onChange={this.onFormChange} data-id="gen" options={[
                      { key: 'm', icon: 'male', text: 'Male', value: 'M' },
                      { key: 'f', icon: 'female', text: 'Female', value: 'F' }
                    ]} placeholder='Gender'/>
                  </div><br/>
                  <Checkbox label='Student of galgotia college.' defaultChecked onChange={this.changeType}/><br/>
                  <Segment inverted fluid style={{padding: '5px'}}>Students which are currently in Galgotia college are requested to register as students. Student have the permission of adding confessions, see student specific posts & make their profile.</Segment>
                  <p style={{margin:'0',color:'white'}}>{this.state.msg3}</p>
                  <div className="two ui buttons">
                  {gu 
                    ? (<button className="ui  inverted teal  medium button next2" onClick={(e) => this.submit( e ,'guest')}>Submit</button>)
                    : (<button className="ui  inverted teal  medium button next2" onClick={this.next2}>Next</button>)
                  }
                  </div>
                </Form>
                <div style={{color:'white'}}>Already a user? <a style={{cursor:'pointer',textDecoration: 'underline'}} onClick={() => this.props.redirect('/login')}>Login</a></div>
              </div>
            </div>
            <div id="personal" className="main3div" style={this.state.detailsCSS}>
              <div className="ui center aligned segment" id="signUpBox" style={{backgroundColor: 'rgba(0, 0, 0, 0.37)', borderRadius: 5}}>
                <div className="ui centered">
                  <h1 className="font" style={{color: 'white',marginBottom: '20px'}}>College Details</h1>
                </div>
                <Form className="ui form">
                  <Input label='Birthday' value={form.bob} fluid type='date' onChange={this.onFormChange} data-id="bob" iconPosition='left'/><br/>
                  <Input label='Addmission I.D.' value={form.clgId} fluid onChange={this.onFormChange} data-id="clgId" iconPosition="left" placeholder="College Addmission Number" width={16}/><br/>
                  <div style={{display:'flex'}}>
                    <label htmlFor="yearR" className="ui label">Year</label>
                  <Select fluid id='yearR' value={form.value} onChange={this.onFormChange} data-id="year" options={[
                    { key: 'mf1', text: 'First', value: '1' },
                    { key: 'mf2', text: 'Second', value: '2' },
                    { key: 'mf3', text: 'Third', value: '3' },
                    { key: 'mf4', text: 'Fourth', value: '4' },
                  ]} placeholder='Year'/>
                  </div><br/>
                  <div style={{display:'flex'}}>
                    <label htmlFor="branchR" className="ui label">Branch</label>
                  <Select fluid id='branchR' value={form.branch} onChange={this.onFormChange} data-id="branch" options={[
                    { key: 'etIT', text: 'Information Technology', value: 'IT' },
                    { key: 'etCS', text: 'Computer science and Engineering', value: 'CS' },
                    { key: 'etME', text: 'Mechanical Engineering', value: 'ME' },
                    { key: 'etCE', text: 'Civil Engineering', value: 'CE' },
                    { key: 'etEC', text: 'Electronics and Communication Engineering', value: 'EC' },
                    { key: 'etE3', text: 'Electrical and Electronics Engineering', value: 'E3' },
                    { key: 'etEE', text: 'Electrical Engineering', value: 'EE' },
                    { key: 'etEI', text: 'Electronics and Instrumentation Engineering', value: 'EI' },
                  ]} placeholder='Branch'/>
                  </div><br/>
                  <div style={{display:'flex'}}>
                    <label htmlFor="sectionR" className="ui label">Section</label>
                  <Select fluid id="sectionR" value={form.sec} onChange={this.onFormChange} data-id="sec" options={[
                    { key: 'gf1', text: 'A', value: 'A' },
                    { key: 'gf2', text: 'B', value: 'B' },
                    { key: 'gf3', text: 'C', value: 'C' },
                  ]} placeholder='Section'/>
                  </div><br/>
                  <p style={{margin:'0',color:'white'}}>{this.state.msg3}</p>
                  <div className="two ui buttons">
                    <button className="ui  inverted teal  medium button prev2" onClick={this.prev2}>Previous</button>
                    <button className="ui  inverted teal  medium button submit" onClick={(e) => this.submit(e ,'student')}>Submit</button>
                  </div>
                </Form>
                <div style={{color:'white'}}>Already a user? <a style={{cursor:'pointer',textDecoration: 'underline'}} onClick={() => this.props.redirect('/login')}>Login</a></div>
              </div>
            </div>
            <div id="done" className="main3div" style={this.state.doneCSS}>
              <div className="ui center aligned segment" id="signUpBox" style={{backgroundColor: '#F1F0FF', borderRadius: 5}}>
                <div className="ui centered header">
                  <h1 className="font" style={{color: 'orange'}}>Check Your Mail</h1>
                </div>
                  <Form className="ui form">
                    <h4>{this.props.register.text}</h4>
                    <div className="one ui buttons">
                      <button className="ui  inverted teal  medium button next1" onClick={this.clickDone}>Done</button>
                    </div>
                  </Form>                
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        register : state.register,
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Register);