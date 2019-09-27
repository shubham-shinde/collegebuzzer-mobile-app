import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import ProfileComp from './index'
import { TextArea , Form, Segment, Button, Image} from 'semantic-ui-react'
import * as action from './../../actions/editProfileActions';

const theme = {
    sunset: "sunset",
    kingYan: "kingYan",
    rainbowBlue: "rainbowBlue",
    darkGray: "darkGray",
    deepSpace: "deepSpace",
    scooter: "scooter",
    amin: "amin",
    delicate: "delicate",
    dimigo: "dimigo",
    dayTripper: "dayTripper",
}

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    upload = () => {
        this.props.updateProfile()
    }
    onChangeP_pic = (e) => {
        this.props.setNewP_picProfileEdit(e.target.files[0])
    }
    setNewTheme = () => {
        const themeArr = [
            "sunset",
            "kingYan",
            "rainbowBlue",
            "darkGray",
            "deepSpace",
            "scooter",
            "amin",
            "delicate",
            "dimigo",
            "dayTripper"
        ]
        this.props.setNewThemeProfileEdit({value:themeArr[this.state.index],key:'theme'});
        console.log(this.state.index);
        this.state.index < 9
        ? this.setState({index :this.state.index + 1})
        : this.setState({index: 0})
    }
    render() {
        const profile = this.props.profile;
        if(profile.p_pic) {
            return (
                <div>
                <Segment textAlign='center'> UPDATE PROFILE </Segment>
                <ProfileComp _id={profile._id} userIntro={profile.userIntro} set_new_theme={this.setNewTheme}  onBioChange={(e) => this.props.setNewThemeProfileEdit({value:e.target.value,key: 'bio'})} themeshow={profile.theme} p_pic={(profile.p_pic.new) ? window.URL.createObjectURL(profile.p_pic.new): profile.p_pic.old} name={profile.name} bio={profile.bio} />                
                    <Form>
                        <input id='profile_update_bt' data-id='file' accept=".jpg, .jpeg" type="file" onChange={this.onChangeP_pic} style={{display: "none"}}/>
                    <Segment inverted color='black' fluid>Reload your tab after updating your profile</Segment>
                        <Button fluid color='blue' style={{margin: '20px', width:'calc( 100% - 40px )'}} onClick={this.upload}>UPDATE</Button>
                    </Form>
                </div>
            );
        }
        else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        updateprofile : state.updateprofile,
        profile: state.editprofile
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);